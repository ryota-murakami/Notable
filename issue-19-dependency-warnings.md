# Issue #19: 依存関係の警告解決

## 問題の概要

Notableプロジェクトでは、依存関係のインストールや更新時に多数のピア依存関係（peer dependency）警告が発生しています。これらの警告は主に以下の原因で発生しています：

1. 異なるパッケージ間で、同じ依存パッケージの異なるバージョンが要求されている
2. インストールされているパッケージのバージョンが、ピア依存関係の要件を満たしていない
3. モノレポ環境でのパッケージ解決の問題

これらの警告は機能的な問題を直接引き起こしていませんが、以下の問題があります：

- インストールログが警告で埋め尽くされ、重要な情報が埋もれる
- 実際に対応が必要な問題の発見が困難になる
- 新しい依存関係の追加時に混乱を招く

## 詳細分析

### 現在のpnpm警告の例

以下は`pnpm install`実行時に発生する警告の一例です：

```
 WARN  Issues with peer dependencies found
.
└─┬ packages/web
  └─┬ @platejs/basic-nodes 49.0.0
    └── ✕ unmet peer @udecode/plate@^49.0.0: found 42.0.0
.
└─┬ packages/web
  └─┬ @sentry/nextjs 8.47.0
    └── ✕ unmet peer next@^12.0.0 || ^13.0.0 || ^14.0.0: found 15.4.3
.
└─┬ packages/mobile
  └─┬ expo 52.0.0
    └── ✕ unmet peer react@^19.0.0: found ^19 but was linked to older version 18.3.1
    └── ✕ unmet peer react-dom@^19.0.0: found ^19 but was linked to older version 18.3.1
```

### 主要な問題パターン

#### 1. Plate.js関連の不一致

- `@udecode/plate`のバージョン42.0.0が使用されている一方で、
- `@platejs/`系パッケージは`@udecode/plate^49.0.0`を要求している

#### 2. Next.js関連の不一致

- Next.jsのバージョン15.4.3が使用されているが、
- `@sentry/nextjs`は`next^12.0.0 || ^13.0.0 || ^14.0.0`を要求している

#### 3. React/React-DOMのバージョン不一致

- パッケージ指定では`react^19`だが、実際にインストールされているのは18.3.1

### 依存関係構成の現状

```json
// package.json (ルート)
{
  "devDependencies": {
    "@types/jest": "^30.0.0",
    "@types/node": "^22.16.5",
    "eslint": "^9.31.0",
    "husky": "^9.1.7",
    "knip": "5.40.0",
    "lint-staged": "^16.1.2",
    "prettier": "^3.6.2",
    "turbo": "^2.3.3",
    "typescript": "^5"
  },
  "packageManager": "pnpm@9.15.0",
  "pnpm": {
    "overrides": {
      "napi-postinstall": "0.3.2"
    }
  }
}
```

現在の`pnpm`設定では、`overrides`に1つのパッケージしか指定されておらず、他の依存関係の問題には対応できていません。

## 解決策

### 1. pnpmのオーバーライド機能の活用

`package.json`のルートにある`pnpm.overrides`セクションを拡張して、衝突する依存関係を明示的に解決します：

```json
"pnpm": {
  "overrides": {
    "napi-postinstall": "0.3.2",
    "@udecode/plate": "^49.0.0",
    "react": "^19",
    "react-dom": "^19",
    "@types/react": "^19",
    "@types/react-dom": "^19"
  }
}
```

### 2. resolutions（yarn/npm用）の追加

pnpmの`overrides`と同様の機能を他のパッケージマネージャでも使えるようにします：

```json
"resolutions": {
  "@udecode/plate": "^49.0.0",
  "react": "^19",
  "react-dom": "^19",
  "@types/react": "^19",
  "@types/react-dom": "^19"
}
```

### 3. 明示的な依存関係の指定

各パッケージの`package.json`でも、主要な依存関係のバージョンを明示的に指定します：

```json
// packages/web/package.json
"dependencies": {
  "@udecode/plate": "^49.0.0",
  "react": "^19",
  "react-dom": "^19",
  // その他の依存関係
}
```

### 4. `sherif`ツールの活用

パッケージマネージャに依存しない依存関係チェックと修正ツール`sherif`を使用して、依存関係を自動的に同期します：

```json
// package.json (ルート)
"scripts": {
  // 既存のスクリプト...
  "sherif": "pnpm dlx sherif -r unsync-similar-dependencies",
  "sherif:fix": "pnpm run sherif --fix -r unsync-similar-dependencies"
}
```

これにより、類似の依存関係が異なるバージョンを使用している場合に検出し、修正することができます。

### 5. 依存関係グラフの可視化とクリーンアップ

`npm-why`や`pnpm why`を使用して依存関係グラフを分析し、不要な依存関係を特定します：

```bash
pnpm why react
```

不要な依存関係が見つかった場合は、それらを削除または更新します。

## 具体的な実装手順

### フェーズ1: 依存関係の分析

1. 現在の依存関係の状況を詳細に分析
   ```bash
   pnpm install --no-frozen-lockfile
   ```

2. 各警告の原因を特定
   ```bash
   pnpm why @udecode/plate
   pnpm why next
   pnpm why react
   ```

### フェーズ2: 重要な依存関係の修正

1. ルートの`package.json`に`pnpm.overrides`セクションを追加
   ```json
   "pnpm": {
     "overrides": {
       "napi-postinstall": "0.3.2",
       "@udecode/plate": "^49.0.0"
     }
   }
   ```

2. 変更後に依存関係をクリーンインストール
   ```bash
   pnpm clean
   pnpm install
   ```

3. 残りの警告を確認し、追加のオーバーライドを設定

### フェーズ3: パッケージ固有の依存関係を調整

1. packages/web, packages/mobile, packages/electronの各package.jsonを更新

2. 以下の依存関係を特に注意して更新：
   - React および React DOM
   - Next.js関連パッケージ
   - Plate.js関連パッケージ
   - 共通のユーティリティライブラリ

3. 更新後に再度インストールしてテスト
   ```bash
   pnpm install
   pnpm run build
   ```

### フェーズ4: CI/CDパイプラインでの検証

1. GitHub Actionsの設定に依存関係チェックを追加
   ```yaml
   # .github/workflows/dependency-check.yml
   name: Dependency Check
   
   on:
     push:
       branches: [main, develop]
     pull_request:
       branches: [main, develop]
   
   jobs:
     check-dependencies:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: pnpm/action-setup@v4
           with:
             version: 9.15.0
         - name: Check for peer dependency warnings
           run: pnpm install | grep -v "WARN" || echo "No warnings found"
   ```

2. インストール時に警告が出ないことを確認

## 期待される効果

- **クリーンなインストールログ**: 警告のない依存関係インストール
- **一貫したバージョン**: プロジェクト全体で一貫した依存関係バージョン
- **安定したビルド**: バージョン不一致によるビルド問題の減少
- **将来の依存関係追加の簡素化**: 明確なバージョン制約により、新しいパッケージ追加時の問題を防止

## 優先度と予想工数

- **優先度**: 低（機能に直接影響はないが、開発体験と長期的なメンテナンス性に重要）
- **予想工数**: 3-5時間 
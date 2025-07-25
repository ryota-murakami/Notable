# Issue #16: ESLint設定のモノレポ対応改善

## 問題の概要

現状、各パッケージ（web、mobile、electron）で独立したESLint設定ファイル（eslint.config.js）が存在し、設定に重複や不整合が見られます。このことによって以下の問題が生じています：

- コード品質の一貫性が担保されない
- 設定の更新・メンテナンスが非効率
- パッケージ間で異なるルール適用によるバグの発生リスク
- 共通の設定変更時に複数ファイルの更新が必要

## 詳細分析

### 現在の構造

```
packages/
  ├── configs/
  │   └── eslint-config/
  │       ├── index.js
  │       ├── next.js
  │       ├── react-native.js
  │       └── electron.js
  ├── web/
  │   └── eslint.config.js
  ├── mobile/
  │   └── eslint.config.js
  └── electron/
      └── eslint.config.js
```

この構造では、共通設定を継承する仕組みはあるものの、以下の問題があります：

1. **古い設定形式が混在**: 一部のファイルで旧来の`.eslintrc`形式の設定と新しい`eslint.config.js`形式が混在
2. **設定の重複**: 各パッケージで同じルールを再定義している箇所がある
3. **TypeScript設定の不整合**: TypeScriptの厳格度がパッケージごとに異なる
4. **ESLint v9対応**: 最新のESLint v9に完全に対応していない箇所がある

## 解決策

1. **共通ESLint設定の統合**
   - `packages/configs/eslint-config/`の設定を見直し、モノレポ全体で使える共通設定を整備
   - フラットな設定ファイル（eslint.config.js）形式に完全移行

2. **継承構造の明確化**
   - 基本設定（base）
   - フレームワーク別設定（Next.js, React Native, Electron）
   - 環境別設定（development, production, test）
   - パッケージ固有設定（必要な場合のみ）

3. **設定のモジュール化**
   - 機能ごとに設定をモジュール化（TypeScript, React, テスト環境など）
   - 各パッケージで必要な設定のみを組み合わせて使用

4. **統一ルールセットの実装**
   - コーディングスタイルの統一
   - インポート順序の統一
   - TypeScriptの厳格度の統一

## 具体的な実装手順

1. `packages/configs/eslint-config/`の構造を以下のように再編成:
   ```
   eslint-config/
   ├── base.js        # 基本設定
   ├── typescript.js  # TypeScript固有設定
   ├── react.js       # React共通設定
   ├── next.js        # Next.js固有設定
   ├── react-native.js # React Native固有設定
   ├── electron.js    # Electron固有設定
   ├── test.js        # テスト用設定
   └── index.js       # エクスポートファイル
   ```

2. 各パッケージの`eslint.config.js`を統一形式に更新:
   ```js
   import base from '@notable/eslint-config/base';
   import typescript from '@notable/eslint-config/typescript';
   import react from '@notable/eslint-config/react';
   import next from '@notable/eslint-config/next';

   export default [
     ...base,
     ...typescript,
     ...react,
     ...next,
     {
       // パッケージ固有の設定（必要な場合のみ）
       files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
       rules: {
         // ...
       },
     },
   ];
   ```

3. CI/CD設定の更新:
   - GitHub Actionsの`lint.yml`ワークフローを更新し、全パッケージで同じESLint設定を使用していることを確認
   - 必要に応じて`pnpm lint`コマンドを更新

## 期待される効果

- コード品質の一貫性向上
- 設定のメンテナンス工数削減
- バグの発生リスク低減
- 開発者の生産性向上

## 優先度と予想工数

- **優先度**: 高 (現在のプロジェクト状態では最優先で対応すべき)
- **予想工数**: 4-8時間 
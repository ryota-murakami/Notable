# Issue #14: モバイルパッケージビルド設定の最適化

## 問題の概要

現在のモバイルパッケージ（React Native / Expo）のビルド設定に複数の問題があり、ビルドプロセスが非効率で、開発体験が最適化されていません。特に以下の問題が顕著です：

- トランスフォーム除外パターン（transformIgnorePatterns）が複雑すぎる
- ディレクトリ構造とモジュール参照パスの不一致
- ビルドスクリプトの最適化不足
- TypeScript設定の問題

## 詳細分析

### 1. トランスフォーム設定の複雑さ

現在の`packages/mobile/jest.setup.js`に定義されているトランスフォーム除外パターンは非常に長く、メンテナンスが困難です：

```javascript
transformIgnorePatterns: [
  'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|react-native-paper|react-native-vector-icons|react-native-markdown-display|@supabase|fuse.js|@testing-library)',
]
```

このパターンは：
- 読みにくく、編集しにくい
- 依存関係が更新されるたびに変更が必要
- 不要なモジュールが含まれている可能性がある

### 2. ディレクトリ構造とモジュール参照パスの問題

`packages/configs/jest-config/react-native.js`では以下のようなモジュール名マッピングが定義されています：

```javascript
moduleNameMapper: {
  '^@/(.*)$': '<rootDir>/src/$1',
  '^~/(.*)$': '<rootDir>/$1',
},
```

しかし、実際のディレクトリ構造には`src`フォルダが存在せず、直接`packages/mobile/`以下にファイルが配置されています。これにより：
- インポートパスの一貫性がない
- テスト実行時にモジュール解決エラーが発生する可能性がある

### 3. Expoのバージョンと設定の問題

- 現在Expo v52.0.0を使用していますが、設定が最適化されていない
- Expo環境でのビルドスクリプトが効率的でない（特にEAS Build関連）
- 開発とプロダクションでの環境変数管理が不十分

## 解決策

### 1. トランスフォーム設定の最適化

```javascript
// 改善案
transformIgnorePatterns: [
  // 主要なReact Native関連パッケージ
  'node_modules/(?!(' + [
    'react-native',
    '@react-native',
    '@react-native-community',
    // Expo関連
    'expo',
    '@expo',
    // ナビゲーション
    'react-navigation',
    '@react-navigation',
    // UIコンポーネント
    'react-native-svg',
    'react-native-paper',
    'react-native-vector-icons',
    // 追加の依存関係
    '@supabase',
    'fuse.js'
  ].join('|') + '))',
],
```

この方法ではパターンが:
- モジュール化され読みやすい
- メンテナンスが容易
- 必要に応じて追加・削除が簡単

### 2. ディレクトリ構造とモジュール参照パスの修正

```javascript
// 修正案
moduleNameMapper: {
  '^@/(.*)$': '<rootDir>/$1',
},
```

また、一貫したインポートパスのためのTypeScriptエイリアス設定も必要です：

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### 3. ビルドスクリプトの最適化

1. **開発ビルドの高速化**:
   ```json
   "scripts": {
     "dev": "EXPO_NO_TYPESCRIPT_SETUP=1 expo start --dev-client",
     "dev:fast": "EXPO_NO_TYPESCRIPT_SETUP=1 EXPO_USE_METRO_FAST_REFRESH=1 expo start --dev-client",
   }
   ```

2. **EAS Build設定の最適化**:
   ```json
   // eas.json
   {
     "build": {
       "development": {
         "distribution": "internal",
         "android": {
           "buildType": "apk"
         },
         "cache": {
           "key": "eas-dev-{{ os }}"
         }
       },
       "production": {
         // ...省略
       }
     }
   }
   ```

3. **環境変数管理の改善**:
   - app.config.jsでの環境変数管理
   - CI/CD環境での環境変数の適切な取り扱い

### 4. TypeScript設定の最適化

```json
// packages/mobile/tsconfig.json
{
  "extends": "../configs/tsconfig/react-native.json",
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    },
    "typeRoots": [
      "./node_modules/@types",
      "./types"
    ]
  },
  "include": [
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts",
    "**/*.test.ts"
  ]
}
```

## 実装手順

1. パッケージ構成の見直し:
   - 現在のディレクトリ構造を確認
   - 必要に応じて`src`ディレクトリの作成と既存コードの移動

2. Jest設定の更新:
   - `packages/configs/jest-config/react-native.js`の更新
   - トランスフォーム除外パターンの最適化

3. TypeScript設定の更新:
   - パスエイリアスの一貫性確保
   - tsconfig.jsonの最適化

4. ビルドスクリプトの改善:
   - package.jsonのスクリプト最適化
   - EAS設定の見直し

5. CIパイプラインの更新:
   - GitHub Actionsワークフローの最適化
   - ビルドキャッシュ戦略の見直し

## 期待される効果

- ビルド時間の短縮（開発効率の向上）
- エラーの減少と安定性向上
- 開発環境の一貫性確保
- CI/CDパイプラインの効率化
- メンテナンス工数の削減

## 優先度と予想工数

- **優先度**: 高（モバイルパッケージの開発効率に直結）
- **予想工数**: 6-10時間 
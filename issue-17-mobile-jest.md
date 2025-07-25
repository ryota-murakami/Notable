# Issue #17: モバイルパッケージJest設定の改善

## 問題の概要

Notableのモバイルパッケージ（React Native/Expo）のJest設定に複数の問題があり、テストの実行と保守が困難になっています。主な問題点は以下の通りです：

1. テストカバレッジが限定的で、アプリケーションの信頼性に影響している
2. Jest設定が最適化されておらず、テスト実行が遅い
3. モック設定が不十分で、外部依存性の適切なスタブ化ができていない
4. テスト環境の構成が実際のアプリ動作環境と一致していない

これらの問題により、テスト駆動開発（TDD）の実践が難しく、バグの早期発見が阻害されています。

## 詳細分析

### 1. Jest設定の問題

現在の`packages/configs/jest-config/react-native.js`は以下のような問題を含んでいます：

```javascript
/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: [
    '**/__tests__/**/*.(ts|tsx|js|jsx)',
    '**/?(*.)+(spec|test).(ts|tsx|js|jsx)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|react-native-paper|react-native-vector-icons|react-native-markdown-display|@supabase|fuse.js|@testing-library)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.expo/',
    '/dist/',
    '/coverage/',
    '/e2e/',
  ],
  collectCoverageFrom: [
    '**/*.(ts|tsx|js|jsx)',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.expo/**',
    '!**/coverage/**',
    '!**/dist/**',
    '!**/*.config.(ts|tsx|js|jsx)',
    '!**/*.stories.(ts|tsx|js|jsx)',
    '!**/app.json',
    '!**/babel.config.js',
  ],
}
```

主な問題点：

- **モジュールパス設定**: `moduleNameMapper`で`<rootDir>/src/$1`を指定していますが、実際のディレクトリ構造と一致していません
- **transformIgnorePatterns**: 長すぎて管理が難しく、モジュールが追加されるたびに更新が必要
- **テストカバレッジ**: コレクション設定はあるものの、カバレッジ閾値の設定がない
- **テストタイムアウト**: 設定がなく、複雑なテストでタイムアウトする可能性がある

### 2. テストファイルの不足

モバイルパッケージには、以下の重要なコンポーネントにテストが不足しています：

- **認証関連**: `SupabaseProvider`コンポーネントのテストがない
- **データ管理**: `useNotes`や`useOfflineNotes`などの重要なHookのテストがない
- **UI コンポーネント**: `NoteCard`や`EmptyState`などの主要コンポーネントのテストがない

### 3. テスト実行環境の問題

```javascript
// packages/mobile/jest.setup.js
// 基本的なセットアップコードしか含まれていない
import '@testing-library/jest-native/extend-expect';

// React Native のモックが不十分
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
```

問題点：
- 重要なネイティブモジュールのモックが不足
- React Navigation、Expo、その他の依存関係のモックが不十分
- タイマーやイベントエミッターのモック設定がない

## 解決策

### 1. Jest設定の最適化

```javascript
/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
  // テストマッチパターンはそのまま
  testMatch: [
    '**/__tests__/**/*.(ts|tsx|js|jsx)',
    '**/?(*.)+(spec|test).(ts|tsx|js|jsx)',
  ],
  
  // テストタイムアウトを設定
  testTimeout: 10000,
  
  // カバレッジ閾値を設定
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 60,
      functions: 70,
      lines: 70,
    },
  },
  
  // トランスフォーム設定の最適化
  transformIgnorePatterns: [
    'node_modules/(?!(' + [
      'react-native',
      '@react-native',
      '@react-native-community',
      'expo',
      '@expo',
      'react-navigation',
      '@react-navigation',
      'react-native-svg',
      'react-native-paper',
      'react-native-vector-icons',
      '@supabase',
      'fuse.js',
    ].join('|') + '))',
  ],
  
  // 正しいモジュールパスマッピング
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  
  // その他の設定は保持
  // ...
};
```

### 2. Jest セットアップファイルの改善

```javascript
// packages/mobile/jest.setup.js 改善案
import '@testing-library/jest-native/extend-expect';
import { Platform, Animated } from 'react-native';

// グローバルモック
global.fetch = jest.fn();
global.__reanimatedWorkletInit = jest.fn();
global.ReanimatedDataMock = jest.fn();

// React Native モック
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

// ネイティブモジュールのモック
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  
  RN.Platform.OS = 'ios'; // デフォルトはiOSとする
  RN.Platform.select = (options) => options[RN.Platform.OS] || options.default || {};
  
  // AsyncStorage モック
  RN.AsyncStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
    getAllKeys: jest.fn(),
  };
  
  return RN;
});

// Expo モック
jest.mock('expo-file-system', () => ({
  documentDirectory: '/mock-documents/',
  cacheDirectory: '/mock-cache/',
  downloadAsync: jest.fn(),
  getInfoAsync: jest.fn(),
  readAsStringAsync: jest.fn(),
  writeAsStringAsync: jest.fn(),
  deleteAsync: jest.fn(),
  makeDirectoryAsync: jest.fn(),
  moveAsync: jest.fn(),
  copyAsync: jest.fn(),
  readDirectoryAsync: jest.fn(),
}));

jest.mock('expo-sharing', () => ({
  isAvailableAsync: jest.fn().mockResolvedValue(true),
  shareAsync: jest.fn(),
}));

// Navigation モック
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
      setOptions: jest.fn(),
    }),
    useRoute: () => ({
      params: { id: 'test-note-id' },
    }),
  };
});

// Supabase モック
jest.mock('@supabase/supabase-js', () => {
  return {
    createClient: jest.fn(() => ({
      auth: {
        getSession: jest.fn().mockResolvedValue({ data: { session: null }, error: null }),
        onAuthStateChange: jest.fn().mockReturnValue({ data: { subscription: { unsubscribe: jest.fn() } } }),
      },
      from: jest.fn().mockReturnValue({
        select: jest.fn().mockReturnThis(),
        insert: jest.fn().mockReturnThis(),
        update: jest.fn().mockReturnThis(),
        delete: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        order: jest.fn().mockReturnThis(),
        single: jest.fn().mockReturnThis(),
        then: jest.fn().mockImplementation(cb => cb({ data: [], error: null })),
      }),
      channel: jest.fn().mockReturnValue({
        on: jest.fn().mockReturnThis(),
        subscribe: jest.fn().mockImplementation(cb => { cb(); return { unsubscribe: jest.fn() }; }),
      }),
    })),
  };
});

// タイマーのモック
jest.useFakeTimers();
```

### 3. テストヘルパーの作成

```typescript
// packages/mobile/test-utils/testSetup.ts
import { render, RenderOptions } from '@testing-library/react-native';
import React from 'react';

// テスト用のプロバイダーラッパー
const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 必要に応じてプロバイダーをラップ
  return (
    <>
      {children}
    </>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// Mock Supabase User
export const mockSupabaseUser = {
  id: 'test-user-id',
  email: 'test@example.com',
  user_metadata: {
    name: 'Test User',
  },
};

// Mock Notes
export const mockNotes = [
  {
    id: 'note1',
    title: 'Test Note 1',
    content: 'This is test note 1',
    status: 'To Do',
    created_at: new Date().toISOString(),
    user_id: 'test-user-id',
    order: 0,
  },
  {
    id: 'note2',
    title: 'Test Note 2',
    content: 'This is test note 2',
    status: 'In Progress',
    created_at: new Date().toISOString(),
    user_id: 'test-user-id',
    order: 1,
  },
];

// テスト用ユーティリティをエクスポート
export * from '@testing-library/react-native';
export { customRender as render };
```

### 4. サンプルコンポーネントテスト

```typescript
// packages/mobile/components/__tests__/NoteCard.test.tsx
import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { render, mockNotes } from '../../test-utils/testSetup';
import { NoteCard } from '../NoteCard';

describe('NoteCard', () => {
  it('renders correctly with provided note', () => {
    const note = mockNotes[0];
    const onPress = jest.fn();
    const { getByText } = render(<NoteCard note={note} onPress={onPress} />);
    
    expect(getByText(note.title)).toBeTruthy();
    expect(getByText(note.content.substring(0, 50))).toBeTruthy();
  });
  
  it('calls onPress when pressed', () => {
    const note = mockNotes[0];
    const onPress = jest.fn();
    const { getByTestId } = render(<NoteCard note={note} onPress={onPress} />);
    
    fireEvent.press(getByTestId('note-card'));
    expect(onPress).toHaveBeenCalledWith(note.id);
  });
});
```

### 5. サンプルHookテスト

```typescript
// packages/mobile/hooks/__tests__/useNotes.test.ts
import { renderHook, act } from '@testing-library/react-hooks';
import { mockNotes } from '../../test-utils/testSetup';
import { useNotes } from '../useNotes';

// Supabaseクライアントのモック
jest.mock('../../lib/supabase', () => ({
  supabase: {
    from: jest.fn().mockReturnValue({
      select: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
      order: jest.fn().mockReturnThis(),
      then: jest.fn().mockImplementation(cb => cb({ data: mockNotes, error: null })),
    }),
    channel: jest.fn().mockReturnValue({
      on: jest.fn().mockReturnThis(),
      subscribe: jest.fn().mockReturnValue({ unsubscribe: jest.fn() }),
    }),
  },
}));

describe('useNotes', () => {
  it('fetches notes on mount', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useNotes());
    
    // 初期状態では読み込み中
    expect(result.current.isLoading).toBe(true);
    
    // データ読み込み完了を待つ
    await waitForNextUpdate();
    
    // データが取得できていることを確認
    expect(result.current.notes).toEqual(expect.arrayContaining(mockNotes));
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
  });
  
  // 他のテストケースを追加...
});
```

## 実装手順

1. **Jest設定の最適化**
   - `packages/configs/jest-config/react-native.js`の改善
   - テストタイムアウトとカバレッジ閾値の設定
   - トランスフォーム除外パターンの整理

2. **Jestセットアップファイルの拡充**
   - `packages/mobile/jest.setup.js`の改善
   - 必要なモジュールのモック実装

3. **テストユーティリティの作成**
   - `packages/mobile/test-utils/`ディレクトリの作成
   - テストヘルパー関数とモックデータの実装

4. **テストカバレッジの向上**
   - 重要コンポーネントのテスト実装
   - カスタムフックのテスト実装
   - ユーティリティ関数のテスト実装

5. **CI統合の改善**
   - GitHub Actionsでのテストワークフロー最適化
   - カバレッジレポートの自動生成と公開

## 期待される効果

- **テストカバレッジの向上**: 主要コンポーネントとロジックのバグを早期発見できるようになる
- **開発速度の向上**: 適切なモックとテストヘルパーにより、テスト作成が効率化される
- **リグレッションの減少**: 自動テストによりコード変更の副作用を早期検出できる
- **ドキュメント効果**: テストがコンポーネントの使用方法の例として機能する
- **CIパイプラインの強化**: 高品質なコードベースを維持できる

## 優先度と予想工数

- **優先度**: 中（モバイルパッケージの品質保証に重要だが、Issue #14と#16の後が望ましい）
- **予想工数**: 8-12時間 
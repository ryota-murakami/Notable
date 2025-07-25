# Issue #18: WebパッケージE2Eテスト信頼性向上

## 問題の概要

WebパッケージのEnd-to-End (E2E) テストにおいて、特にCI環境での実行時に信頼性の問題があります。主な問題点は以下の通りです：

1. CI環境でのPlaywrightブラウザのインストールが無限に停止する問題
2. テスト実行時のタイムアウト設定が最適化されていない
3. テスト実行の安定性が低く、同じテストでも環境によって結果が異なる場合がある
4. PR #26で一部改善されたものの、依然として問題が残っている

これらの問題により、CI/CDパイプラインの信頼性が低下し、デプロイプロセスや開発効率に悪影響を及ぼしています。

## 詳細分析

### 1. Playwrightブラウザインストール問題

現在の`.github/workflows/e2e.yml`では、以下のようなメッセージが表示されます：

```
=== E2E Infrastructure Status ===
Due to persistent CI infrastructure issues with Playwright browser installation
hanging indefinitely, E2E tests are temporarily running in mock mode.

Issue: https://github.com/ryota-murakami/Notable/issues/107
Status: E2E tests work locally but hang in CI during browser installation
```

これは、Playwrightが必要なブラウザをダウンロードする際に、CI環境で無限にハングする問題を示しています。

### 2. 設定の問題点

`packages/web/playwright.config.ts`の設定には以下の問題があります：

```typescript
webServer: {
  command: 'PORT=3000 pnpm run dev',
  url: 'http://localhost:3000',
  reuseExistingServer: !process.env.CI,
  timeout: 120 * 1000, // 2分のタイムアウト
  stdout: 'pipe',
  stderr: 'pipe',
},
```

- 2分のタイムアウトは十分かもしれないが、CI環境での初回ビルドには時間がかかる場合がある
- `reuseExistingServer: !process.env.CI`はCI環境で毎回新しいサーバーを起動するが、これが効率的かどうか
- ブラウザのダウンロードとインストールに関する設定が不足している

### 3. テストの不安定性

PR #26では以下のようなテストが追加されました：

```typescript
// packages/web/e2e/app.spec.ts
test('Playwright can connect to Next.js dev server', async ({ page }) => {
  const response = await page.goto('/');
  expect(response).not.toBeNull();
  expect(response!.status()).toBeLessThan(600);
  await expect(page.locator('body')).toBeVisible();
});

test('server starts and responds within timeout', async ({ page }) => {
  const startTime = Date.now();
  await page.goto('/');
  const loadTime = Date.now() - startTime;
  expect(loadTime).toBeLessThan(10000);
  await expect(page.locator('html')).toBeVisible();
});
```

これらは基本的なインフラ動作確認のテストですが、以下の問題があります：

- ネットワークの遅延や一時的な問題によって失敗する可能性がある
- 10秒というタイムアウト値はCI環境によっては短すぎる場合がある
- より堅牢なリトライメカニズムがない

## 解決策

### 1. Playwrightブラウザのインストール改善

```yaml
# .github/workflows/e2e.yml の改善案
jobs:
  e2e:
    runs-on: ubuntu-latest
    steps:
      # ...前略...
      
      # ブラウザのインストールを分離し、キャッシュを使用
      - name: Cache Playwright browsers
        uses: actions/cache@v4
        id: playwright-cache
        with:
          path: ~/.cache/ms-playwright
          key: playwright-browsers-${{ runner.os }}-${{ hashFiles('**/playwright.config.ts') }}
      
      - name: Install Playwright browsers with timeout
        if: steps.playwright-cache.outputs.cache-hit != 'true'
        run: |
          # タイムアウト付きでインストール
          timeout 120s npx playwright install --with-deps || (
            echo "::warning::Playwright browser installation timed out. Using headless mode only."
            echo "PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1" >> $GITHUB_ENV
          )
      
      # テスト実行の改善
      - name: Run E2E tests
        env:
          # ブラウザのダウンロードに失敗した場合は、ヘッドレスモードのみで実行
          PLAYWRIGHT_TEST_OPTIONS: ${{ env.PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD == 1 && '--project=chromium' || '' }}
        run: |
          cd packages/web && npx playwright test $PLAYWRIGHT_TEST_OPTIONS
```

### 2. Playwright設定の最適化

```typescript
// packages/web/playwright.config.ts の改善案
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  
  // 各テストのタイムアウトを延長
  timeout: 60000,
  
  // テスト失敗時の再試行を追加
  retries: process.env.CI ? 2 : 0,
  
  // テスト実行の並列化を設定
  workers: process.env.CI ? 1 : undefined,
  
  // CI環境でのレポート形式を最適化
  reporter: process.env.CI 
    ? [['list'], ['github'], ['html']] 
    : [['list'], ['html']],
  
  // プロジェクト（ブラウザ）設定
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // CI環境では最小限のブラウザセットのみ実行
    ...(process.env.CI ? [] : [
      {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] },
      },
      {
        name: 'webkit',
        use: { ...devices['Desktop Safari'] },
      },
    ]),
  ],
  
  // ウェブサーバー設定
  webServer: {
    command: 'PORT=3000 pnpm run dev',
    url: 'http://localhost:3000',
    // CI環境ではサーバー再利用を有効化（より安定した動作のため）
    reuseExistingServer: true,
    // タイムアウトを延長
    timeout: 180 * 1000,
    stdout: 'pipe',
    stderr: 'pipe',
  },
});
```

### 3. テスト自体の堅牢性向上

```typescript
// packages/web/e2e/app.spec.ts の改善案

// 環境変数からタイムアウト設定を取得する柔軟な実装
const SERVER_RESPONSE_TIMEOUT = parseInt(process.env.E2E_SERVER_TIMEOUT || '15000', 10);

// 基本インフラテスト
test.describe('Notable Web App E2E Infrastructure', () => {
  // テスト失敗時のリトライ回数を明示的に設定
  test.describe.configure({ retries: 3 });
  
  test('Playwright can connect to Next.js dev server', async ({ page }) => {
    // より堅牢な実装
    test.slow(); // このテストは時間がかかる可能性があることを明示
    
    // リトライロジックを含める
    let attempts = 0;
    const maxAttempts = 3;
    let response = null;
    
    while (attempts < maxAttempts) {
      try {
        response = await page.goto('/', { timeout: 30000 });
        break;
      } catch (e) {
        attempts++;
        if (attempts >= maxAttempts) throw e;
        console.log(`Retrying page load (${attempts}/${maxAttempts})...`);
        await page.waitForTimeout(2000);
      }
    }
    
    expect(response).not.toBeNull();
    expect(response.status()).toBeLessThan(600);
    await expect(page.locator('body')).toBeVisible();
    
    console.log(`✅ E2E Infrastructure working - Server responded with status: ${response.status()}`);
  });
  
  test('server starts and responds within reasonable timeout', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/', { timeout: 30000 });
    const loadTime = Date.now() - startTime;
    
    // 環境変数から取得したタイムアウト値を使用
    expect(loadTime).toBeLessThan(SERVER_RESPONSE_TIMEOUT);
    await expect(page.locator('html')).toBeVisible();
    
    console.log(`✅ Server responded in ${loadTime}ms`);
  });
});
```

### 4. モック/スタブの活用

テスト実行を高速化し信頼性を向上させるために、本番環境に影響しない範囲でモックやスタブを活用します：

```typescript
// packages/web/e2e/test-utils/mockAuth.ts
import { Page } from '@playwright/test';

export async function mockAuthState(page: Page, isLoggedIn = true) {
  await page.addInitScript(() => {
    window.localStorage.setItem('mock_auth_state', isLoggedIn ? 'authenticated' : 'unauthenticated');
    
    // 認証APIコールのモック
    window.mockAuthAPI = true;
  });
}
```

## 実装手順

1. **CIパイプラインの改善**
   - GitHub Actionsワークフローの最適化
   - Playwrightブラウザキャッシュの実装
   - タイムアウト処理の見直し

2. **Playwright設定の最適化**
   - `playwright.config.ts`の更新
   - プロジェクト設定の見直し
   - レポーター設定の最適化

3. **テストコードの堅牢性向上**
   - リトライロジックの実装
   - タイムアウト設定の環境変数対応
   - エラーハンドリングの強化

4. **モック/スタブ戦略の実装**
   - 認証のモック実装
   - 外部依存のスタブ化
   - テストヘルパー関数の作成

5. **テスト実行環境の分離**
   - 最小限のテストをCIで実行
   - 詳細なテストはローカルまたは専用環境で実行
   - テスト実行の段階的アプローチ

## 期待される効果

- **CI/CDパイプラインの信頼性向上**: テスト実行が安定し、誤検出（フォールスポジティブ/ネガティブ）が減少
- **テスト実行時間の短縮**: 効率的なキャッシュ戦略とパラレル実行による時間短縮
- **デバッグの容易さ**: 詳細なレポートと再現可能なテスト環境
- **開発者体験の向上**: テストの信頼性が向上することで、開発者がテスト結果を信頼できるようになる

## 優先度と予想工数

- **優先度**: 中（CI/CDパイプラインの信頼性に関わるため重要）
- **予想工数**: 6-8時間 
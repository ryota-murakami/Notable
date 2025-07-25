# Issue: Y.js CRDTとPlate.jsの統合完了

## 問題の概要

現在、NotableアプリケーションではリッチテキストエディターとしてTipTapからPlate.jsへの移行を進めています。同時に、Y.js（Conflict-free Replicated Data Type）を使用したリアルタイムコラボレーション機能の実装も進行中ですが、まだ完全には機能していません。この機能は、複数ユーザーが同時に文書を編集する際に、衝突を自動的に解決し、シームレスな共同編集体験を提供するために不可欠です。

## 詳細分析

現在の実装状態：

1. **データベース構造**
   - Supabaseに`yjs_documents`テーブルが作成され、Y.jsのCRDTデータを保存する基盤は準備されています
   - RowレベルセキュリティとReal-timeサブスクリプションが設定されています

2. **Provider実装**
   - `SupabaseYjsProvider`クラスが実装され、WebSocketを介したデータ同期の基本機能があります
   - `YjsDocumentPersistence`クラスでデータの永続化機能の一部が実装されています

3. **問題点**
   - Plate.jsとY.jsの統合が不完全で、編集操作がリアルタイムに他のクライアントに反映されないケースがある
   - 大きなドキュメントの編集時にパフォーマンス問題が発生する可能性がある
   - ユーザープレゼンス機能（誰がどこを編集しているかの表示）が未実装
   - オフライン編集とその後の同期機能が最適化されていない
   - コンフリクト解決ロジックのエッジケースに対応できていない

## 解決策

### 1. Plate.jsとY.jsの完全統合

```typescript
// プラグイン構成の最適化例
import { createPlateUI, HeadingToolbar, PlateFloatingLink, PlateProvider, Plate, createPlugins } from '@udecode/plate';
import { withYjs, withYHistory, YjsPlugin } from '@udecode/plate-yjs';

const plugins = createPlugins(
  [
    // 基本プラグイン
    ...
    // Y.js統合プラグイン
    withYjs({
      doc: ydoc,
      fragment: ydoc.getXmlFragment('plate-content'),
      awareness: provider.awareness,
    }),
    withYHistory(),
  ],
);

// エディターコンポーネント
export const CollaborativeEditor = ({ noteId, userId }) => {
  return (
    <PlateProvider plugins={plugins}>
      <Plate>
        <HeadingToolbar />
        <PlateFloatingLink />
        <PlateContent />
      </Plate>
    </PlateProvider>
  );
};
```

### 2. SupabaseYjsProvider最適化

```typescript
// ProviderのWebSocket再接続ロジック改善
export class SupabaseYjsProvider {
  // ...

  private setupReconnection() {
    // WebSocket切断時の再接続ロジック
    this.channel.on('disconnect', () => {
      this.status = 'disconnected';
      this.emit('status', { status: this.status });
      
      // 指数バックオフを使用した再接続
      this.reconnectionAttempts++;
      const delay = Math.min(
        1000 * Math.pow(2, this.reconnectionAttempts),
        this.maxReconnectionDelay
      );
      
      setTimeout(() => this.connect(), delay);
    });
  }
  
  // ...
}
```

### 3. プレゼンス機能（共同編集表示）実装

```typescript
// ユーザープレゼンス情報の管理
export const useYjsAwareness = (provider) => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const updateUsers = () => {
      const awarenessStates = Array.from(provider.awareness.getStates().entries())
        .map(([clientId, state]) => ({
          clientId,
          user: state.user || { name: `Anonymous ${clientId}`, color: '#888' },
          selection: state.selection
        }))
        .filter(({ user }) => user);
      
      setUsers(awarenessStates);
    };
    
    provider.awareness.on('change', updateUsers);
    updateUsers();
    
    return () => {
      provider.awareness.off('change', updateUsers);
    };
  }, [provider]);
  
  const updateLocalAwareness = useCallback((selection) => {
    provider.awareness.setLocalState({
      user: {
        name: 'Current User',
        color: '#0284c7',
        // ユーザー情報を追加
      },
      selection
    });
  }, [provider]);
  
  return { users, updateLocalAwareness };
};
```

### 4. パフォーマンス最適化

1. **フラグメント化（Fragmenting）**
   - 大規模ドキュメントの場合、Y.Documentを複数のフラグメントに分割
   - 必要な部分のみをロードすることで初期ロード時間を短縮

2. **差分同期の最適化**
   - 状態ベクトル（State Vector）を使用した効率的な差分同期
   - 必要最小限のデータのみを送信することでネットワーク使用量を削減

3. **ガベージコレクション戦略**
   - 削除されたコンテンツの効率的な処理
   - 定期的なドキュメント圧縮の実装

### 5. オフラインサポートの強化

```typescript
// オフラインモードとIndexedDBを使用した永続化
import { IndexeddbPersistence } from 'y-indexeddb';

// Supabaseとの同期に加えて、ローカルにも保存
const ydoc = new Y.Doc();
const localPersistence = new IndexeddbPersistence(noteId, ydoc);
const supabasePersistence = new YjsDocumentPersistence({
  supabase,
  doc: ydoc,
  noteId
});

// オフライン状態検出と再接続ロジック
export const useOfflineSync = (provider) => {
  useEffect(() => {
    const handleOnline = () => {
      provider.connect();
    };
    
    const handleOffline = () => {
      // オフライン状態を検出した場合、ユーザーに通知
      // ローカルの変更はIndexedDBに保存され続ける
    };
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [provider]);
};
```

## 実装手順

1. **Plate.js統合**
   - Plate.jsエディタコンポーネント作成
   - Y.jsプラグイン設定
   - 基本的な編集機能のテスト

2. **SupabaseYjsProviderの最適化**
   - WebSocket接続管理の改善
   - エラーハンドリングの強化
   - 再接続ロジックの実装

3. **プレゼンス機能の実装**
   - カーソル位置の同期
   - ユーザー情報の表示
   - 選択範囲のハイライト

4. **パフォーマンス最適化**
   - 大規模ドキュメントのテスト
   - ボトルネックの特定と修正
   - 差分同期の最適化

5. **オフラインサポート**
   - IndexedDBを使用したローカル永続化
   - オンライン/オフライン切り替え時の挙動改善
   - 同期競合の解決テスト

## 期待される効果

- **シームレスな共同編集体験**: 複数ユーザーが同時に文書を編集しても衝突なく作業可能
- **リアルタイム同期**: 変更がミリ秒単位で他のクライアントに反映される
- **オフライン作業対応**: ネットワーク接続がなくても編集作業を継続でき、オンライン復帰時に自動同期
- **パフォーマンス向上**: 大規模ドキュメントでも快適に編集可能
- **プレゼンス認識**: 他のユーザーが何をどこで編集しているかをリアルタイムで確認可能

## 優先度と予想工数

- **優先度**: 高（現在進行中のブランチ作業であり、主要機能である）
- **予想工数**: 15-20時間 
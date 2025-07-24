#!/bin/bash
INPUT=$(cat)
STOP_ACTIVE=$(echo "$INPUT" | jq -r '.stop_hook_active')
PENDING_FILE="/tmp/claude_tasks_pending"

# If this is a Stop hook invocation *and* a marker file says tasks are still pending,
# block the stop request so Claude continues working.
if [[ "$STOP_ACTIVE" == "true" && -f "$PENDING_FILE" ]]; then
  # Emit structured JSON so Claude knows why we are blocking the stop.
  echo '{"decision":"block","reason":"タスクが未完了のためストップを禁止します。完了処理を続行してください。"}'
  exit 2   # exit-code 2 tells Claude to block
fi

# Otherwise allow Claude to continue normally.
# echo '{"decision":"block","reason":"タスクが未完了のためストップを禁止します。You MUST remember all memories with read_graph tool. CLAUDE.mdを読んで読んでください。まだ完了していないIssueがないか確認し、全てが完了するまで作業を繰り返してください。既にFixしているIssueはCloseしてください。作業してIssueをFixしたらCommit,PushしてIssueをCloseしてください。"}'
echo '{"decision":"block","reason":"タスクが未完了のためストップを禁止します。https://github.com/ryota-murakami/Notable/pull/100 をマージするまで一緒に最高のNotableを作りましょう。😄"}'
exit 2

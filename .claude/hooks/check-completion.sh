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
echo '{"decision":"block","reason":"タスクが未完了のためストップを禁止します。すべてのMemoryを思い出してください。まだ完了していないIssueがないか確認し、全てが完了するまで作業を繰り返してください。既にFixしているIssueはCloseしてください。作業してIssueをFixしたらCommit,PushしてIssueをCloseしてください。"}'
exit 2

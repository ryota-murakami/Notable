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
echo '{"decision":"block","reason":"タスクが未完了のためストップを禁止します。まだ完了していないIssueがないか確認し、全てが完了するまで作業を繰り返してください。既にFixしているIssueはCloseしてください。作業してIssueをFixしたらCommit,PushしてIssueをCloseしてください。#76も完了した場合は、webのdev環境を起動してPlaywrightで問題がないか動作確認してください。あなたがElectornアプリのdevかproductionビルドを直接操作して動作確認する方法、ElectornアプリをE2Eテストする方法を調査してください。あなたがMobileアプリをAndroidかiOSのシミュレータで動作確認する方法とMobileアプリのiOS、Androidの両方にe2eテストを作成する方法を調査してください。When you dont get the results you expected, or research latest info before thinking, feel free to use a web search and all available MCP tools, such as perprexity_ask, GitHub mcp tool  list_discussions, search_code. search_issues, search_orgs, search_pull_requests, search_repositories, search_users web_search_exa, github_search_exa, deep_researcher_start, deepwiki ask_question, read_wiki_structure, read_wiki_contents to get the best result. I really apreaciate your help.use sequentialthinking. use todo_write tool. use context7 ultrathink"}'
exit 2

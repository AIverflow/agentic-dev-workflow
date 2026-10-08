# Prompt E: let the agent write the prompt (meta-prompt)

Use when a task is big or you'll reuse the prompt. Instead of writing the prompt
yourself, give the agent the pieces and let it write the real prompt.
Then read it, fix it, and paste it into a fresh session.

Replace `[GOAL]`, `[CONTEXT]`, `[MUST]`, `[MUST NOT]` and `[DONE WHEN]`.

```
Write a prompt for a coding agent. Don't do the task yourself.

Goal: [GOAL]
Context: [CONTEXT: project, files, who it's for]
Must: [MUST]
Must not: [MUST NOT]
Done when: [DONE WHEN]

First: ask me up to 5 questions about anything missing or unclear, and wait.

Then write the prompt:
- For an agent with no memory of this chat: put in all it needs.
- Clear steps, in order. Short sentences, plain words.
- Say where to stop and ask me, and what to report at the end.
- Use [BRACKETS] for anything I should fill in each time.
- Max 40 lines. Cut anything the agent would do anyway.

Show it in one code block, then list 3 ways it could go wrong.
```

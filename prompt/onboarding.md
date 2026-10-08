# Prompt C: walk me through this repo (onboarding)

Use when you open a project you don't know yet.
Replace `[AREA]` (a feature or folder, or `the whole repo`), then paste into a fresh agent session.

```
Walk me through [AREA] of this repo. I am new here. Read only: don't edit anything.

1. In 3 sentences: what this project does and who uses it.
2. The stack: language, framework, and how to run it and its tests.
3. The map: max 8 main folders or modules, one line each on what it owns.
4. One real example: pick one common action (a click, a request, a command)
   and follow it step by step through the code, with file paths.
5. The top 3 gotchas: things that would surprise me before my first change.
6. Read next: the 5 files I should read first, in order, with one line on why.

Rules:
- Plain words, short sentences. Define any term a junior dev may not know.
- Point to real files (path:line). Don't guess: if you're not sure, say so.
- Then ask me what I want to change, and wait.
```

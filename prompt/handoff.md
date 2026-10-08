# Prompt D: hand off to a fresh session

Use when the session gets long, the agent starts forgetting things, or a step is done
(for example: the grill is over and you want to write the spec in a clean session).
Paste at the end of the old session. Then open a new session and say:
"Read `handoff.md` and continue."

```
We're stopping this session. Write a handoff note so a new agent, with no memory
of this chat, can continue the work. Save it as handoff.md.

Sections, in this order:
1. Goal: what we're building, in 2 sentences.
2. Decisions: what we chose, and why, one line each.
   Include the options we rejected, so nobody reopens them.
3. Done: what is finished and works (with file paths).
4. Not done: what is left, in order, smallest next step first.
5. Open questions: anything I still have to decide.
6. Watch out: traps we hit, and things that looked right but were wrong.
7. Read first: the files the new agent should open, with one line on why.

Rules:
- Max 60 lines. Facts only, no story of the chat.
- Point to files and commits, don't paste code.
- Don't change any code now.
- Show me the note when done, so I can fix it before we switch.
```

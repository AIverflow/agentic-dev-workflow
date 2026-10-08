You are writing a prompt, not running it. I'll paste your output into a fresh coding-agent session.
That session will build a set of tickets in parallel.

## Step 1: read the tickets
- Read every ticket in `.scratch/<feature-slug>/issues/` (ask me for the slug if it's unclear).
- For each one, note: number, title, "Blocked by", Status, and acceptance criteria.
- Read `docs/agents/*.md`, `GLOSSARY.md`, and any coding-standards file, so the prompt uses the project's words and rules.
- Find the project's commands for typecheck, single test file, and full test suite.
- Find the base branch.

## Step 2: plan the waves
- Wave 1 = every ticket with no open blockers.
- Wave N = every ticket whose blockers are all in earlier waves.
- Show me the waves as a table: wave, ticket, blocked by.
- Flag two risks:
  - tickets in the same wave that will probably edit the same files (merge-conflict risk)
  - missing or circular blockers
- Wait for my OK before writing the prompt.

## Step 3: write the orchestrator prompt
It must be self-contained, because the new session has none of this context. It must tell the orchestrator to:

1. **Run one wave at a time.** For each ticket in the wave, start one sub-agent in its own git worktree, on its own branch. Start them all at once so they run in parallel.
2. **Give each sub-agent a full brief.** Sub-agents can't call `/implement`, so copy its steps into the brief:
   - the ticket's file path and full text
   - the project glossary terms that apply
   - the test seams agreed in the spec
   - the TDD rules: use the `tdd` skill, red before green, one behaviour per cycle, test only at the agreed seams
   - run typecheck and single test files often, and the full suite once at the end
   - commit on its worktree branch, with a message that names the ticket, e.g. `feat(dark-mode): 01 toggle button`
   - stay inside this ticket's scope, with no drive-by changes
   - report back: branch name, files changed, test result, any doubts
3. **After each wave:**
   - merge each branch into the base branch, one at a time
   - run the full test suite after each merge
   - on a merge conflict, resolve it directly: read both tickets, keep the intent of each, then re-run the full test suite
   - run the `code-review` skill on the wave's changes, against the base branch from before the wave
   - set each finished ticket's `Status:` to `done`
4. **Stop and ask me** if any of these happens:
   - a sub-agent fails
   - tests stay red after a merge
   - the review finds a Spec problem
   Don't start the next wave until the current one is green and reviewed.
5. **At the end**, report a table: ticket, branch, tests, review findings.

Output the final prompt in one fenced code block, ready to paste.

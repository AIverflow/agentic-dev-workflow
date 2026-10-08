# Agentic Dev Workflow: a beginner's map

A visual, beginner-friendly guide to building software with an AI coding agent
(Claude Code, Codex, Cursor…), using
[Matt Pocock's skills](https://github.com/mattpocock/skills).

**▶ Live site: https://aiverflow.github.io/agentic-dev-workflow/**

## What's inside

One page that walks through the whole loop with a single running example
(adding dark mode to a todo app):

| Step | Command | What happens |
|---|---|---|
| 0 · Setup | `/init`, `/setup-matt-pocock-skills` | Give the agent a project guide, connect the skills |
| 1 · Grill me | `/grill-with-docs` | The agent interviews you until the idea is clear |
| 2 · Spec | `/to-spec` | The conversation becomes a written plan |
| 3 · Tickets | `/to-tickets` | The plan is cut into small, working slices |
| 4 · Build + TDD | `/implement` or `/implement-spec` | Test first, then code, one ticket or all in parallel |
| 5 · Review | `/code-review` | Two checks: clean code, and matches the ticket |
| 6 · Retro | `/retro` | Improve the agent's setup for next time |

Each step shows what **you** do, what the **agent** does, a real-life analogy and
an example. A printable cheat sheet is at the end.

## Languages

| Language | Page |
|---|---|
| English | [index.html](https://aiverflow.github.io/agentic-dev-workflow/) |
| Français | [index.fr.html](https://aiverflow.github.io/agentic-dev-workflow/index.fr.html) |
| Español | [index.es.html](https://aiverflow.github.io/agentic-dev-workflow/index.es.html) |
| Deutsch | [index.de.html](https://aiverflow.github.io/agentic-dev-workflow/index.de.html) |
| Português (Brasil) | [index.pt-br.html](https://aiverflow.github.io/agentic-dev-workflow/index.pt-br.html) |
| 简体中文 | [index.zh.html](https://aiverflow.github.io/agentic-dev-workflow/index.zh.html) |

Translation fixes are welcome: open an issue or a pull request.

## Run it locally

No build step, no dependencies. Open `index.html` in a browser, or:

    python3 -m http.server 8000

## Also in this repo

`parallel-tickets-meta-prompt.md`: a prompt that writes a prompt to build a set of
tickets in parallel, in waves, with a stop-and-ask checkpoint after each wave.
For most cases, the official `/implement-spec` skill now does this job.

## Credits

Workflow and skills by [Matt Pocock](https://github.com/mattpocock/skills).
Content matches skills version 1.3.1 (October 2026).

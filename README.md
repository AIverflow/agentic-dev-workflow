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

A second page, **Prompts**, is one tab away (**Guide | Prompts** at the top of every
page). It has copy-paste prompts, each with a Copy button:

- Explain it simply (ELI5)
- Teach it with a diagram
- Walk me through this repo
- Hand off to a fresh session
- Build tickets in parallel
- Write a prompt for me (let the agent write the prompt)

## Languages

| Language | Guide | Prompts |
|---|---|---|
| English | [index.html](https://aiverflow.github.io/agentic-dev-workflow/) | [prompts.html](https://aiverflow.github.io/agentic-dev-workflow/prompts.html) |
| Français | [index.fr.html](https://aiverflow.github.io/agentic-dev-workflow/index.fr.html) | [prompts.fr.html](https://aiverflow.github.io/agentic-dev-workflow/prompts.fr.html) |
| Español | [index.es.html](https://aiverflow.github.io/agentic-dev-workflow/index.es.html) | [prompts.es.html](https://aiverflow.github.io/agentic-dev-workflow/prompts.es.html) |
| Deutsch | [index.de.html](https://aiverflow.github.io/agentic-dev-workflow/index.de.html) | [prompts.de.html](https://aiverflow.github.io/agentic-dev-workflow/prompts.de.html) |
| Português (Brasil) | [index.pt-br.html](https://aiverflow.github.io/agentic-dev-workflow/index.pt-br.html) | [prompts.pt-br.html](https://aiverflow.github.io/agentic-dev-workflow/prompts.pt-br.html) |
| 简体中文 | [index.zh.html](https://aiverflow.github.io/agentic-dev-workflow/index.zh.html) | [prompts.zh.html](https://aiverflow.github.io/agentic-dev-workflow/prompts.zh.html) |

Translation fixes are welcome: open an issue or a pull request.

## Run it locally

No build step, no dependencies. Open `index.html` in a browser, or:

    python3 -m http.server 8000

## Also in this repo

`parallel-tickets-prompt.md`: a reusable prompt that builds a set of tickets in
parallel with the full cycle for each one (build with TDD → separate review → fix →
merge → next ticket), and asks you whenever a ticket hits a blocking question.
It works with any coding agent and any tracker. The official `/implement-spec` skill does
something similar with fewer checkpoints.

## Credits

Workflow and skills by [Matt Pocock](https://github.com/mattpocock/skills).
Content matches skills version 1.3.1 (October 2026).

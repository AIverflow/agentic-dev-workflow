# AGENTS.md

Static site in `docs/`, served by GitHub Pages (`main`, `/docs`). No build, no dependencies, no tests.
To view: open `docs/index.html`.

## Files (in `docs/`)

- `index*.html`: the guide, one page per language (EN, FR, ES, DE, PT-BR, ZH).
- `prompts*.html`: copy-paste prompts, one page per language. Cards have ids
  (`#eli5`, `#diagram`, `#onboarding`, `#write-prompt`); the guide links to them.
- `style.css`: all styles. `app.js`: scroll-spy. `copy.js`: Copy buttons (labels keyed by `<html lang>`).

## Rules

- Every change goes into all 6 languages, with the same structure and ids.
- No dependencies, no external assets: pages must work from `file://`.
- Colors only through the `:root` variables.
- A `<section id>` in `<main>` needs a matching link in `nav.map`, or the scroll-spy breaks.
- If the sticky map's height changes, update `scroll-padding-top` (desktop and ≤720px).
- Running example: the office-fridge lunch thief. Wrap example blocks in `.ex` so "Hide examples" hides them.
- Plain words, short sentences. Say "the agent", not "Claude".
- Never translate skill names or commands. Address the reader as: FR vous, ES tú, DE du, PT-BR você, ZH 你.
- New language: a guide page and a prompts page, a link in every `nav.langs`, a `copy.js` label, a README link.
- Content matches mattpocock/skills (version in the footer). Check its CHANGELOG before changing skill behavior.

## Git

- No agent attribution: no `Co-Authored-By`, no "Generated with", no agent name.

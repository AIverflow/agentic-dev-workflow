# AGENTS.md

This repo is a small, dependency-free teaching resource: an explainer page for the
agentic dev workflow (grill → spec → tickets → implement/TDD → review → retro),
in six languages, plus a
meta-prompt that generates a parallel-ticket orchestrator prompt. There is no
build system, no package manager, and no test suite.

## Layout

- `index.html` (EN), `index.fr.html`, `index.es.html`, `index.de.html`,
  `index.pt-br.html`, `index.zh.html` — one page per language, same structure and
  section ids. Any content change must be mirrored in all six.
- `style.css` — all styles, shared by every page. `app.js` — the scroll-spy, shared.
- `README.md` — project description and live-site link (GitHub Pages, served from
  `main` at the repo root).
- Each page's hero has a `nav.langs` picker listing all six pages, with
  `aria-current="page"` on its own language. Adding a language means adding a page
  and adding its link to the picker in every page, plus the README table.
- Translation rules: never translate skill names or commands (`/grill-with-docs`,
  "Grill me", `/implement-spec`…). Address the reader as: FR "vous", ES "tú",
  DE "du", PT-BR "você", ZH "你".
- `parallel-tickets-meta-prompt.md` — a *prompt to write a prompt*. It is pasted
  into a fresh coding-agent session; nothing here executes it.

## Viewing the page

Open the file directly, or serve the folder:

    python3 -m http.server 8000
    # then browse http://localhost:8000/index.html

There is no build step. Edit a page or `style.css` and reload.

## Conventions

- Zero dependencies. Do not add a bundler, framework, CDN link, or external
  asset; the pages must keep working offline from a `file://` open.
- All colors are CSS custom properties declared in `:root` (`--accent`, `--ink`,
  `--line`, `--card`, `--bg`, …). Reuse those variables; never hard-code a hex
  value in a rule.
- Layout uses plain CSS grid with `repeat(auto-fit, minmax(…, 1fr))` for responsive
  cards — follow that pattern for new sections.
- Sections follow the sticky-map flow: `#basics`, `#grill`, `#spec`, `#tickets`,
  `#implement`, `#review`, `#retro`, `#cheatsheet`. Adding a section means adding a
  `<section id="…">` in `<main>` *and* a matching `<li>` in `nav.map`, or the
  scroll-spy breaks.
- The scroll-spy is the only JS: an `IntersectionObserver` keyed on `main section`
  ids mapping to `.map a` hrefs. Keep ids and hrefs in sync.
- Prose is deliberately beginner-facing: plain words, short sentences, a worked
  "dark mode" example throughout. Match that tone; don't add jargon.
- Agent-neutral wording: say "the agent", not "Claude". Claude Code appears only
  as one example of a coding agent.
- Content tracks Matt Pocock's skills (github.com/mattpocock/skills); the footer
  states the version it matches. Check the repo's CHANGELOG.md before editing
  skill behavior.

## Pitfalls

- The print stylesheet hides everything except `#cheatsheet` and the
  `.print-btn`. New top-level sections are auto-hidden on print via
  `section:not(#cheatsheet)` — no action needed, but don't rely on print showing
  other content.
- The sticky nav uses `scroll-padding-top` (130px desktop, 160px under 720px);
  changing the nav height means updating both.
- `parallel-tickets-meta-prompt.md` describes paths like `.scratch/<slug>/issues/`,
  `docs/agents/`, `GLOSSARY.md` that belong to the *target* project, not this repo.
  Don't create them here.

## Git

- Commits are authored by the repo owner only. Coding agents must not sign
  commits or PRs: no `Co-Authored-By:` trailer, no "Generated with …" line, no
  agent name in the author or message.

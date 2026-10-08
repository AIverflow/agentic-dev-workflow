# AGENTS.md

This repo is a small, dependency-free teaching resource: an explainer page for the
agentic dev workflow (grill → spec → tickets → implement/TDD → review → retro),
in English and French, plus a
meta-prompt that generates a parallel-ticket orchestrator prompt. There is no
build system, no package manager, and no test suite.

## Layout

- `index.html` — the English page. One self-contained file: inline `<style>`, inline
  `<script>`, no external assets, no CDN links, no framework.
- `index.fr.html` — the French page. Same structure and an identical `<style>` block;
  any change to one page must be mirrored in the other. A `.lang-switch` link in
  the hero points from each page to the other.
  French copy: use "vous", and never translate skill names or commands
  (`/grill-with-docs`, "Grill me", `/implement-spec`…).
- `parallel-tickets-meta-prompt.md` — a *prompt to write a prompt*. It is pasted
  into a fresh coding-agent session; nothing here executes it.

## Viewing the page

Open the file directly, or serve the folder:

    python3 -m http.server 8000
    # then browse http://localhost:8000/index.html

There is no build step. Edit `index.html` and reload.

## Conventions (observed in index.html)

- Single file, zero dependencies. Do not add a bundler, framework, or external
  asset — the page is meant to work offline from a `file://` open.
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

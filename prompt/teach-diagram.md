# Prompt B: teach it with a diagram (HTML)

Use when a topic, problem or workflow is hard to understand.
Replace `[TOPIC / PROBLEM / WORKFLOW]` (keep one) and `[AUDIENCE]`
(`college grad`, `junior dev` or `non-technical`), then paste into a fresh agent session.

```
Teach me [TOPIC / PROBLEM / WORKFLOW] as one self-contained HTML page.
The goal is understanding, not decoration.

First: if the topic or audience is ambiguous, ask me up to 3 questions and wait.

Audience: [college grad | junior dev | non-technical].
Explain the thing itself, in plain words, at that level.
Define every term this audience may not know, the first time it appears,
in under 8 words. Skip definitions for terms they already know.

Page structure, in this order:
1. Title, then a one-sentence answer: what it is, or what the problem is.
2. Why it matters: one sentence on what goes wrong without it.
3. The diagram (main part). Max 10 boxes, labels max 4 words.
   - Number the steps 1, 2, 3 in reading order.
   - One color per actor or component, with a small legend.
     Decisions are diamonds; loops are arrows going back.
   - Under the diagram, one plain sentence per numbered step: what happens and why.
4. One worked example with real values, walked through the numbered steps.
5. Common mistakes: max 3 bullets.
6. "Remember": one sentence.

Technical rules:
- ONE file, inline <style>. No external assets, no CDN, no framework;
  works offline from file://.
- Lay out the diagram's boxes with CSS grid; keep arrows simple (CSS or small
  SVG lines). Nothing may overlap, and no text may overflow its box.
  If you can open the page in a browser, check this before finishing.
- Under 600px wide, the diagram stacks top to bottom. Readable in print.
- Colors as CSS variables in :root.
- Short sentences. No filler. Nothing outside the structure above.

Save as [topic-name].html.
```

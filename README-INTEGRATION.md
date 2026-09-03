# Integrating this redesign into `myko-ai-website`

This is a full rebuild of the site (`index.html`, `pages/*.html`, `css/style.css`,
`js/main.js`, `robots.txt`, `sitemap.xml`) — same zero-build, static
HTML/CSS/vanilla-JS approach as the current repo, so it drops in cleanly.

## 1. Copy these files over the existing ones

```
index.html
pages/about.html
pages/changelog.html
pages/privacy.html
pages/terms.html
pages/security.html
css/style.css
js/main.js
robots.txt
sitemap.xml
```

## 2. Keep your existing `assets/` folder as-is

I didn't have write/binary access to your repo's images in this session, so
every screenshot and the logo are referenced by the **exact same relative
paths** your current site already uses:

```
assets/img/logo.png
assets/img/screens/Demo.png
assets/img/screens/terminal.png
assets/img/screens/editor.jpg
assets/img/screens/source-control.png
assets/img/screens/ai-workflow.jpg
assets/img/screens/web-preview.png
assets/img/screens/themes.png
assets/downloads/Myko_0_8_5_x64-setup.exe
```

Because the paths match exactly, once you drop the new files into the repo
next to your existing `assets/` folder, every image and the Windows download
link will resolve immediately — nothing to re-wire.

## 3. What changed vs. the current site

- Full visual redesign: dark, glass-panel developer aesthetic, a
  mycelium-inspired node-mesh background (nods to the "Myko" name), a
  "window chrome" treatment for every screenshot, and a monospace
  `// kicker`-style section label instead of generic all-caps eyebrows.
- Nav restructured to `Product / AI / Open Source / About / Changelog /
  GitHub`, matching the deeper page structure while staying simple.
- Added an explicit AI-agent workflow ladder (request → plan → edit →
  review → run → verify) and a 7-step "how it feels" workflow section.
- Added a dedicated providers panel (hosted vs. local) and a compact
  feature-matrix list instead of a plain card grid.
- Copy rewritten throughout, but every feature claim, stat (`<10MB`,
  `~299ms`, no telemetry), provider list, download link, and FAQ answer is
  carried over unchanged from your current site's content — nothing was
  invented.
- All legal pages (`privacy.html`, `terms.html`, `security.html`) keep the
  exact same legal meaning as your current copy; only the visual
  presentation changed.
- Theme toggle, mobile menu, FAQ accordion, and the GitHub star-count
  fetch are all preserved and reimplemented in `js/main.js`.
- No new dependencies or build step — still plain HTML/CSS/JS, loading only
  Google Fonts (Inter + JetBrains Mono) from a `<link>` tag. If you'd rather
  stay fully self-hosted, drop that `<link>` and swap the `--sans`/`--mono`
  variables in `css/style.css` for system fonts.

## 4. Before you ship

- Re-verify `<10MB` / `~299ms` against the current build before publishing —
  the copy assumes those numbers still hold.
- If you have a custom domain, update the `canonical`/`og:url` values in each
  page's `<head>` (currently pointed at `myko-beta.vercel.app`).

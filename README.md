# The Quantum Notebook

This repository contains my learning notes on quantum science and technology: quantum mechanics, quantum computing, quantum information, materials, devices, and related topics.

The aim is to build a clear, connected understanding of the quantum world and the technologies built around it.

## Repository Structure

```text
quantum-notebook/
├── .github/workflows/             # PR checks and GitHub Pages deployment
├── .githooks/pre-push             # Local checks before pushing
├── docs/.vitepress/               # VitePress site configuration
├── assets/                        # Images used by the notes
├── docs/index.md                  # Website home page
├── quantum-computing-and-information-notes/
├── quantum-mechanics-notes/
├── scripts/sync-docs.mjs          # Build-time content sync
├── package.json                   # Site and tooling commands
└── README.md
```

The two `*-notes` directories are the canonical source. VitePress uses a build-time sync into the ignored `docs/` workspace; those generated copies are never committed.

The website source is the VitePress configuration in `docs/.vitepress/`, the homepage at `docs/index.md`, and the build script in `scripts/`. There is no separate frontend application—the site is generated from Markdown and configuration.

The sidebar is generated from the numbered filenames, so adding a new note such as `05-new-topic.md` automatically places it in the right order. Run `npm run sync` to refresh the local VitePress content manually; `npm run dev` and `npm run build` run it automatically.

## Website and checks

The notes are published as a VitePress site on GitHub Pages. Pull requests run formatting, Markdown linting, and a full site build before they can be merged.

To run the same checks before pushing, enable the repository hook once:

```bash
git config core.hooksPath .githooks
```

Contributions and corrections are welcome through pull requests.

## References

### Primary Sources

- Schrödinger, E. (1926). _Quantisierung als Eigenwertproblem (Erste Mitteilung)._ Annalen der Physik, 79, 361–376.  
  https://doi.org/10.1002/andp.19263840404

- Schrödinger, E. (1926). _Quantisierung als Eigenwertproblem (Zweite Mitteilung)._ Annalen der Physik, 79, 489–527.  
  https://doi.org/10.1002/andp.19263840602

- Schrödinger, E. (1926). _Quantisierung als Eigenwertproblem (Dritte Mitteilung)._ Annalen der Physik, 80, 437–490.  
  https://doi.org/10.1002/andp.19263851302

- Schrödinger, E. (1926). _Quantisierung als Eigenwertproblem (Vierte Mitteilung)._ Annalen der Physik, 81, 109–139.  
  https://doi.org/10.1002/andp.19263861802

- Born, M. (1926). _Zur Quantenmechanik der Stoßvorgänge._ Zeitschrift für Physik, 37, 863–867.  
  https://doi.org/10.1007/BF01397477

- Born, M. (1926). _Quantenmechanik der Stoßvorgänge._ Zeitschrift für Physik, 38, 803–827.  
  https://doi.org/10.1007/BF01397184

### General / Supporting References

- [Physics LibreTexts](https://phys.libretexts.org/) — General reference for quantum mechanics, modern physics, and related background.

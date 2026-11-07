# Xiaojie Zhang — Interdisciplinary Research Portfolio

## Preview
Open `index.html` in a browser. No installation or server is required.

## Structure
- `index.html` — full-screen combined Home/About, filterable Research, Methods & Tools placeholders, CV section, Contact.
- `styles.css` — responsive layout and design.
- `script.js` — interactive research filters and copyright year.
- `assets/` — optional portrait and CV files.

## Personalize
1. Replace the portrait placeholder in `index.html` with an `<img>` tag (example is in the HTML comment) and add `assets/portrait.jpg`.
2. Export your LaTeX CV to PDF, place it at `assets/Xiaojie_Zhang_CV.pdf`, and follow the comment in the CV section to enable the PDF button. Until then, the homepage **View CV** button scrolls to the CV section, not a missing file.
3. Add links to public papers when ready, and review the editorial project summaries and manuscript statuses.
4. Fill in the three cards under Methods & Tools as you develop the descriptions.

## Publish with GitHub Pages
Create a public GitHub repository named `YOUR_USERNAME.github.io`. Upload the contents of this folder to the repository root. Under Settings → Pages, choose Deploy from a branch, `main`, root `/`. Your website will be available at `https://YOUR_USERNAME.github.io` after deployment.

## Notes
- The supplied CV was LaTeX source; no CV PDF or portrait was included.
- The website is static, no cookies or analytics are installed.

## Full-screen introduction
The Home/About section occupies at least one initial viewport below the sticky navigation bar. Research begins beneath the fold on desktop; on small screens the introduction may become taller to prevent clipping. Adjust `.intro-section` in `styles.css` to change this behavior.

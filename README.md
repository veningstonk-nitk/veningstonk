# Personal academic website: Dr. K. Veningston

Static site (HTML, CSS, a little JavaScript). No build step.

## Publish on GitHub Pages
1. On GitHub, create a **public** repository named `<your-username>.github.io` (this gives the shortest link, `https://<your-username>.github.io`).
2. Upload everything in this folder (`index.html`, `assets/`, `README.md`, `.nojekyll`) to the repository root.
3. Repository **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, folder `/ (root)`. Save.
4. After about a minute the site is live. Give that URL to the department webmaster for your faculty page.

(A project repo such as `faculty-site` also works; the link is then `https://<your-username>.github.io/faculty-site/`.)

## Things to fill in
- `assets/js/main.js` → the `SITE` block: NITK email, Google Scholar, Scopus, GitHub, LinkedIn, department page. Empty values stay hidden.
- Photo: save a square portrait as `assets/img/profile.jpg` (about 400×400). Until then the "KV" monogram shows.
- CV: add `assets/cv.pdf` and a link in the Contact section if you want one.
- Counts (`index.html`, "About" and "Students" sections): conference papers, datasets and PI projects differ between your earlier profile figures and the October 2026 interview slide. Set them to the figures you want to stand behind.
- The hero picture is an illustration, not real imagery. To use a real Dal Lake aerial photo, replace the `<svg>` inside `<figure class="aerial">` with `<img src="assets/img/dal-lake.jpg" alt="...">`.

## Privacy
Nothing personal (date of birth, phone, ID numbers, family details) is on the site. Keep it that way.

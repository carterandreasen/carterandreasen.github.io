# Portfolio Site

A minimal, multi-page personal portfolio site — plain HTML, CSS, and
JavaScript, no build step, no framework. Built to be hosted for free
on **GitHub Pages**.

## What's in here

```
portfolio-site/
├── index.html        Home page
├── education.html    Education page
├── experience.html   Experience page
├── projects.html      Projects page
├── contact.html       Contact page
├── 404.html            Custom "page not found" page (optional)
├── css/
│   └── style.css       All styles for every page
├── js/
│   └── script.js        Mobile menu + auto-updating footer year
├── assets/
│   └── README.txt        Notes on where to put your resume/photo
└── README.md            You are here
```

Every page shares the same sidebar (your name + nav) and footer, and
all pull from the same `css/style.css` and `js/script.js`, so a change
to either file updates the whole site at once.

## Every place you need to add your own info

Open each HTML file and search for `TODO` — every spot that needs your
real content is marked with an HTML comment explaining what goes
there and why. As a checklist:

- [ ] Your name and tagline (sidebar, every page)
- [ ] Page `<title>` and meta description (top of each page's `<head>`)
- [ ] Homepage hero headline and bio (`index.html`)
- [ ] Quick facts: school, location, grad year (`index.html`)
- [ ] Featured project previews (`index.html`)
- [ ] Real GitHub / LinkedIn / email links (sidebar, `contact.html`)
- [ ] Education entries (`education.html`)
- [ ] Experience entries (`experience.html`)
- [ ] Project entries and skills list (`projects.html`)
- [ ] A `resume.pdf` file dropped into `assets/`

To add or remove an entry (another job, another project, etc.), copy
an existing `.timeline-entry` or `.project-entry` block in the
relevant HTML file and edit the copy — the CSS handles the styling
automatically.

## Customizing the look

All colors and fonts are defined as CSS variables at the top of
`css/style.css`, under the `THEME TOKENS` heading. Change a value
there and it updates across the whole site — you shouldn't need to
touch anything else to re-theme it. The current fonts (Newsreader for
headings, IBM Plex Sans for body text) are loaded from Google Fonts in
the `<head>` of each page; swap the `<link>` URL for a different
Google Fonts pairing if you want something else.

## Viewing it locally before you publish

You can just double-click `index.html` to open it in a browser, but
some browsers restrict JavaScript on files opened directly from disk.
If the mobile menu button doesn't work when testing, run a tiny local
server from inside the `portfolio-site` folder instead:

```bash
# Python (usually pre-installed on Mac/Linux)
python3 -m http.server 8000

# or, if you have Node.js
npx serve
```

Then visit `http://localhost:8000` in your browser.

## Deploying to GitHub Pages

1. **Create a repository.** On GitHub, click "New repository." Name
   it anything you like — if you want your site at
   `https://yourusername.github.io` directly (no extra path), name
   the repo exactly `yourusername.github.io`. Any other name works
   too; your site will just live at
   `https://yourusername.github.io/repo-name`.

2. **Push this folder to it.** From inside `portfolio-site`:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

3. **Turn on Pages.** In the repository on GitHub, go to
   **Settings → Pages**. Under "Build and deployment," set
   **Source** to "Deploy from a branch," pick the **main** branch and
   the **/ (root)** folder, then save.

4. **Wait a minute, then visit your URL.** GitHub shows the live URL
   at the top of the Pages settings once it finishes building
   (usually under a minute). Any time you push new commits to `main`,
   the live site updates automatically within a minute or two.

## Adding a working contact form (optional)

`contact.html` currently just lists an email address and social
links — GitHub Pages hosts static files only, so there's no server to
receive form submissions. If you'd like an actual `<form>` that emails
you when someone submits it, a free service like
[Formspree](https://formspree.io) or [Getform](https://getform.io)
gives you an endpoint you can point a plain HTML form at, with no
backend code required. Their docs show the exact markup to drop in.

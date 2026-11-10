# Audit Assurance — website

Static marketing site for **Audit Assurance**, a division of Fort Assurances: audit protection insurance
for individuals and businesses facing CRA and Revenu Québec audits.

- No backend, no login, no build step: plain HTML, CSS and JavaScript.
- French by default, with an EN/FR toggle (the choice is remembered).
- Get-a-quote form: personal or business, full name, company, business type (business only),
  address, optional annual revenue, audits in the last 3 years, contact details and consent.

## Files

```
index.html       The whole page
css/styles.css   Styles (palette: navy #13294B, lime #84BD00, slate #5B7F95; font Figtree)
js/config.js     Phone, email and form endpoint: edit this file
js/main.js       Language toggle, menu, form validation and sending
img/favicon.svg  Icon
```

## Before going live

1. Edit `js/config.js` with the real phone number and email.
2. Choose how quote requests reach you:
   - **Formspree** (recommended): create a form at formspree.io, put its URL in `formEndpoint`.
     Requests arrive by email and in the Formspree dashboard.
   - **No service:** leave `formEndpoint` empty. The form opens the visitor's email app with the
     request filled in, addressed to `email`. This works, but some visitors won't press send.
3. Host anywhere that serves static files: Netlify, Cloudflare Pages, GitHub Pages, Render (static site).

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publishing updates

The CSS and JS links in `index.html` end in `?v=...`. Change that value whenever you edit those files,
so visitors' browsers load the new version right away instead of a cached copy.

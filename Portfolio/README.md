# Portfolio (Web & Flutter learner)

This is a minimal, responsive single-page portfolio built with plain HTML, CSS and JS. It's mobile-first, accessible, and easy to customize.

How to preview

- Open `index.html` in your browser (double-click or use "Open File" in your browser).
- Or serve it with a static server (recommended for nicer local links):

  - With Python 3:

    ```
    python -m http.server 8000
    ```

  - With Node.js (http-server):

    ```
    npx http-server -c-1 .
    ```

What to edit

- Replace the placeholder text `YourName` and `you@example.com` in `index.html`.
- Swap images in `Assets/IMAGES/` with your screenshots or photos.
- Edit colors and spacing in `Assets/CSS/style.css`.
- Add real project links or connect the contact form to your backend in `Assets/JS/script.js`.

Accessibility

- The site uses semantic HTML and ARIA attributes for the mobile menu and modal. Test with keyboard and a screen reader.

Next steps (suggestions)

- Add a resume download link.
- Add a Projects page that loads more details or links to GitHub repos.
- Connect the contact form to a real email service (Formspree, Netlify Forms, or your backend).

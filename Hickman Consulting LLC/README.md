# Hickman Consulting LLC Website

Static multi-page website for Hickman Consulting LLC, built for deployment on GitHub Pages.

## Files

- `index.html`
- `services.html`
- `pilot-partnerships.html`
- `about.html`
- `inquiry.html`
- `thank-you.html`
- `styles.css`
- `script.js`
- `assets/`

## Local Preview

From this folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages Deployment

1. Create a GitHub repository.
2. Add this project to that repository.
3. Push to the `main` branch.
4. In GitHub, open `Settings` -> `Pages`.
5. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`

GitHub Pages will publish the site at:

```text
https://YOUR-USERNAME.github.io/REPO-NAME/
```

## Important Follow-Up Before Going Live

The inquiry form currently redirects to:

```text
http://localhost:8000/thank-you.html
```

Before publishing, update the `_next` value in `inquiry.html` to your live GitHub Pages URL, for example:

```html
<input type="hidden" name="_next" value="https://YOUR-USERNAME.github.io/REPO-NAME/thank-you.html" />
```

## Form Delivery

The inquiry form submits through FormSubmit to:

```text
hunter.hickman@hickmanconsultingai.com
```

On the first live submission, FormSubmit may send a confirmation email before forwarding submissions normally.

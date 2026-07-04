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

The inquiry form is set up to submit to a Google Apps Script web app, which can write inquiry data directly into a Google Sheet without requiring prospects to confirm by email.

### Google Sheets Setup

1. Open the Google Sheet:

```text
https://docs.google.com/spreadsheets/d/1gGmpNIbQDApMLn1nsOuL-Oj9YFi6qLAhqmlhHXx_uq0
```

2. Ensure the first sheet is named `Sheet1`.
3. Add these column headers to the first row:

```text
Timestamp | Name | Organization | Email | Role | Interest | Message | Page URI | Page Name
```

4. In Google Apps Script, paste the code from:

[`google-apps-script/Code.gs`](/Users/hunter.hickman/Documents/Hickman%20Consulting%20LLC/google-apps-script/Code.gs)

5. Deploy the script as a web app with access set so the website can submit to it.
6. Paste the deployed Apps Script URL into:

[`script.js`](/Users/hunter.hickman/Documents/Hickman%20Consulting%20LLC/script.js)

Replace:

```text
PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE
```

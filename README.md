# ARITA RESTAURANT COLLECTION

A React + Vite B2B catalog site for overseas restaurant owners selecting Arita ware by budget, use case, cuisine, and restaurant concept.

## Features

- 11-page SPA using React Router HashRouter
- GitHub Pages-ready Vite configuration
- GitHub Actions auto deploy workflow
- 5-language switching: English, Japanese, Chinese, French, Spanish
- Shared Selection List / Quote Cart
- Product filters and sorting
- Product detail pages and Quick View modal
- Quote and sample request forms with selected item reflection
- Responsive, high-end catalog UI

## Tech Stack

- React
- Vite
- React Router DOM
- GitHub Pages
- GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production Build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## GitHub Pages Deployment

This project is configured for a repository named:

```text
arita-restaurant-collection
```

The Vite base path is set in `vite.config.js`:

```js
base: '/arita-restaurant-collection/'
```

If you rename the repository, update the `base` value to match:

```js
base: '/your-repository-name/'
```

### GitHub Actions Deployment Steps

1. Create a GitHub repository named `arita-restaurant-collection`.
2. Upload or push all files in this project.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to the `main` branch.
6. GitHub Actions will run `npm install`, `npm run build`, upload `dist`, and deploy to GitHub Pages.
7. Open the URL shown in the workflow deployment result.

## Routing Notes

The app uses `HashRouter`, so public URLs look like:

```text
https://<username>.github.io/arita-restaurant-collection/#/collection
https://<username>.github.io/arita-restaurant-collection/#/budget
```

This avoids refresh-related 404 errors on GitHub Pages.

## Replacing Product Data

Edit `src/data/products.js`.

Each product includes:

- `name`
- `kiln`
- `image`
- `alt`
- `priceMin` / `priceMax`
- `moq`
- `budget`
- `useCases`
- `cuisines`
- multilingual `description`
- multilingual `scene`

## Replacing Translation Data

Edit `src/data/translations.js`.

The UI text is managed through the `translations` object and accessed with `useLanguage().t()`.

## Making the Contact Form Production-Ready

The current forms show a confirmation message only. To send inquiries in production, connect `QuoteForm.jsx` to one of the following:

- Formspree
- Netlify Forms
- Google Apps Script endpoint
- A custom backend API
- CRM or email automation service

Update the `handleSubmit` function in `src/components/QuoteForm.jsx` to send data to your chosen endpoint.

## Important Files

```text
package.json
vite.config.js
index.html
.github/workflows/deploy.yml
src/main.jsx
src/App.jsx
src/styles.css
src/data/products.js
src/data/translations.js
src/context/LanguageContext.jsx
src/context/SelectionContext.jsx
src/context/FilterContext.jsx
```

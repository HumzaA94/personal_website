# Humza Ahmed Personal Website

This repository contains the source code for Humza Ahmed's personal website and professional portfolio. The site presents engineering leadership experience, selected product and data platform work, career highlights, and contact links in a lightweight React application.

The app is built with [React](https://react.dev/) and [Vite](https://vite.dev/), with static assets and styling kept in the `src` directory for straightforward deployment to common cloud and static hosting providers.

## Features

- Responsive single-page portfolio layout
- Light and dark appearance toggle
- Sections for work focus, selected projects, experience, and contact
- Static Vite build suitable for public hosting
- ESLint configuration for local code checks

## Tech Stack

- React 19
- Vite 8
- JavaScript
- CSS
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Project Structure

```text
.
├── public/              # Static public assets
├── src/
│   ├── assets/          # Images and imported media
│   ├── App.jsx          # Main page content and layout
│   ├── App.css          # Component and page styles
│   ├── index.css        # Global styles and theme variables
│   └── main.jsx         # React entry point
├── index.html           # HTML document shell and metadata
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Scripts and dependencies
```

## Deployment

The production build is generated in `dist/` with:

```bash
npm run build
```

The contents of `dist/` can be deployed to static hosting providers such as Vercel, Netlify, Cloudflare Pages, GitHub Pages, or an object storage/CDN setup. For most platforms, use:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

## Public Repository Notes

This repository is intended to be safe for public GitHub hosting. Before publishing, confirm that no private credentials, unpublished documents, or local-only files are committed. Environment files, editor settings, dependency folders, build outputs, and OS metadata are ignored through `.gitignore`.

## License

No license has been added yet. Add one before encouraging reuse of the code or content.

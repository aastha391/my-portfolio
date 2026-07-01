# Aastha Sheoran — Portfolio (React + JavaScript)

A 3D scrollable portfolio built with plain React + JavaScript (no TypeScript), Vite, Tailwind CSS,
Three.js (via React Three Fiber), and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Project structure

```
src/
  components/       → one file per section (Navbar, Hero, About, Skills, Projects,
                       Experience, Certifications, Contact, Footer)
  components/GraphBackground.jsx  → the 3D graph-traversal hero visual
  components/ProjectCard.jsx      → reusable project card
  components/SkillCard.jsx        → reusable skill category card
  data/             → your content, separated from UI (skills.js, projects.js,
                       certifications.js, experience.js, education.js)
  App.jsx           → layout only, composes the sections
  main.jsx          → React entry point
```

Nothing lives inside App.jsx except the page layout — every section is its own component,
and all your resume content lives in `src/data/` so you can update it without touching any UI code.

## Making the contact form actually send emails

The form currently falls back to opening the visitor's email client. To make it send real
emails without a backend:

1. Go to https://web3forms.com and enter your email to get a free **Access Key**.
2. Open `src/components/Contact.jsx`.
3. Replace this line near the top:
   ```js
   const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE'
   ```
   with your real key.
4. Save, redeploy — submissions will land straight in your inbox.

## Updating your content

You never need to touch component files to update your resume info — just edit the files in
`src/data/`:

- `education.js` — your name, tagline, contact links, and education history
- `skills.js` — skill categories and tags
- `projects.js` — project details, tech stack, bullet points
- `experience.js` — work/internship/simulation entries
- `certifications.js` — certifications list

## Deploying

Push to GitHub, then import the repo on [Vercel](https://vercel.com) — it auto-detects Vite
and deploys with zero config. Build command: `npm run build`, output directory: `dist`.

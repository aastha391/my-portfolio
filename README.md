# Aastha Sheoran — Portfolio (React + JavaScript)

A modern, interactive developer portfolio built with **React + JavaScript**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Three.js (React Three Fiber)**. The portfolio features smooth animations, a 3D hero section, responsive design, and a clean, component-based architecture.

## 🌐 Live Demo

**Portfolio:** https://aastha-portfolio-liard.vercel.app/

## 🚀 Tech Stack

* React (JavaScript)
* Vite
* Tailwind CSS
* Framer Motion
* Three.js (React Three Fiber)
* React Icons

## 📦 Run Locally

```bash
npm install
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`).

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── GraphBackground.jsx
│   ├── ProjectCard.jsx
│   └── SkillCard.jsx
│
├── data/
│   ├── education.js
│   ├── skills.js
│   ├── projects.js
│   ├── experience.js
│   └── certifications.js
│
├── App.jsx
└── main.jsx
```

The application follows a clean component-based structure. Every section of the portfolio is separated into its own component, while all portfolio content is stored inside the `src/data` folder, making future updates quick and easy.

## ✉️ Contact Form

The contact form currently opens the visitor's default email client.

To enable direct email submissions without creating a backend:

1. Create a free account at **https://web3forms.com**.
2. Generate your Access Key.
3. Open `src/components/Contact.jsx`.
4. Replace:

```js
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";
```

with your actual Access Key.

5. Save the changes and redeploy the project.

Form submissions will then be delivered directly to your inbox.

## 📝 Updating Portfolio Content

All personal information is stored separately from the UI.

Update these files whenever you want to change your portfolio:

* `education.js` — Personal information, education, contact links
* `skills.js` — Technical skills
* `projects.js` — Project details and technologies
* `experience.js` — Internship and work experience
* `certifications.js` — Certifications and achievements

No UI components need to be modified for content updates.

## 🚀 Deployment

This project is deployed on **Vercel**.

To deploy your own version:

```bash
npm run build
```

The production files will be generated inside the `dist` folder.

You can then deploy by importing your GitHub repository into Vercel, which automatically detects the Vite configuration.

## 📬 Connect With Me

**Live Portfolio:** https://aastha-portfolio-liard.vercel.app/

Feel free to explore my projects, skills, and experience. Feedback and collaboration opportunities are always welcome!

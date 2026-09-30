# arshid-portfolio

Personal portfolio for Abu Arshid P, Software Engineer (AI & Machine Learning). Content comes only from the resume and LinkedIn profile.

## Tech stack
Next.js 14 (App Router), React 18, Tailwind CSS 3. No API keys or environment variables.

## Run locally
```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start   # production check
```

## Structure
```
app/         layout, global styles, page
components/  Nav, Hero, Section, ProjectCard
data/        content.js  <- all portfolio text lives here
```

## Customize
Edit `data/content.js` to change the profile, projects, experience, skills, education, and certifications. Colors are set in `tailwind.config.js` (`accent`). Dark mode follows the visitor's system setting.
Not in the source documents, so not included: a GitHub link and project links or metrics. Add them to `content.js` when available.

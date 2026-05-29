# Satyam Maddheshiya — Portfolio

Personal portfolio site. Production-grade Next.js 14 app with custom design system.

**Live:** https://satyam-portfolio-alpha.vercel.app

## Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS with HSL-based design tokens
- **Animation:** Framer Motion
- **Fonts:** Instrument Serif (display) · Inter (body) · JetBrains Mono (accents) — all via `next/font/google`
- **Email:** Resend (free tier — 100 emails/day)
- **Hosting:** Vercel

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Then add your RESEND_API_KEY (get one free at https://resend.com)

# 3. Run dev server
npm run dev
# Open http://localhost:3000
```

## Project structure

```
portfolio/
├── public/
│   └── satyam.jpg          # Profile photo
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout, fonts, theme provider
│   │   ├── page.tsx        # Main page (assembles all sections)
│   │   ├── globals.css     # Design tokens + base styles
│   │   └── api/contact/    # Contact form API route
│   ├── components/         # Section components (Hero, About, etc.)
│   └── lib/
│       └── data.ts         # ALL content lives here — single source of truth
└── tailwind.config.ts      # Custom color tokens
```

## Updating content

**All content (bio, projects, skills, achievements) lives in `src/lib/data.ts`.**
Edit that file and the site updates everywhere. No need to touch components.

To replace the profile photo: drop a new `satyam.jpg` into `public/`.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to https://vercel.com/new and import the repo.
3. In **Environment Variables**, add:
   - `RESEND_API_KEY` = your Resend API key
   - `CONTACT_EMAIL` = satyam.sipah12@gmail.com
4. Click **Deploy**. Done.

Future commits to `main` will auto-deploy.

## Design system

Colors are HSL-based via CSS variables in `globals.css`. Two themes (light/dark) defined under `:root` and `.dark`. To change the accent color, edit `--accent` in `globals.css`.

The design intentionally avoids generic "AI portfolio" patterns:
- Distinctive serif headlines (Instrument Serif italics) instead of Inter/Roboto
- Warm off-white / warm near-black instead of cold gray
- One amber detail (status indicator) for surprise
- Mono font for technical authenticity (skill chips, metadata)

## License

MIT — feel free to use as a starting point for your own portfolio. Attribution appreciated.

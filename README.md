# Harshith Mullapudi — Portfolio

A premium, production-grade portfolio website with an embedded **AI Recruiter Chatbot** ("Ask Harshith AI").

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3
- **Language**: TypeScript
- **Fonts**: Geist Sans + Geist Mono
- **AI**: Anthropic Claude API (with local keyword fallback)
- **Deploy**: Vercel

## Features

- ✅ Hero, About, Experience, Projects, System Design, Skills, Achievements, Contact sections
- ✅ AI Recruiter Chatbot (floating button, bottom-right)
- ✅ 10 suggested recruiter questions
- ✅ Typing indicator & conversation reset
- ✅ Local keyword-matching fallback (works without API key)
- ✅ Dark mode (default)
- ✅ Fully responsive
- ✅ SEO metadata
- ✅ Grid pattern background, subtle animations

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env file
cp .env.example .env.local

# 3. Add your API key (optional)
# Edit .env.local and add ANTHROPIC_API_KEY

# 4. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## AI Chatbot Setup

The chatbot works **without any API key** using local keyword matching.

For full AI-powered responses, add your Anthropic API key:

```bash
# .env.local
ANTHROPIC_API_KEY=your_key_here
```

Get a key at [console.anthropic.com](https://console.anthropic.com).

**Security**: The API key is only used server-side in `/app/api/chat/route.ts`. It is never exposed to the browser.

---

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

### Option 2: GitHub Integration
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. Add environment variable: `ANTHROPIC_API_KEY`
5. Deploy

---

## Project Structure

```
harshith-portfolio/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   ├── globals.css         # Tailwind base + CSS variables
│   └── api/chat/route.ts   # AI chat API (Anthropic, server-side)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── SystemDesign.tsx
│   ├── Skills.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   ├── Chatbot.tsx         # Main chatbot container
│   ├── ChatMessage.tsx     # Message bubble component
│   └── SuggestedQuestions.tsx
├── data/
│   └── profile.ts          # Resume knowledge base
├── lib/
│   └── chatbot.ts          # Local keyword matching + system prompt
├── public/
│   └── resume.pdf          # ← Add your resume PDF here
├── .env.example
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

---

## Customization

### Update Profile Data
Edit `data/profile.ts` — all sections (skills, experience, projects, achievements) are driven from this single file.

### Add Resume PDF
Place your resume at `public/resume.pdf` so the Resume download button works.

### Contact Form
The contact form in `components/Contact.tsx` currently simulates submission. Wire it up to:
- [Resend](https://resend.com) — recommended
- [Formspree](https://formspree.io)
- [EmailJS](https://www.emailjs.com)

---

## License
Personal portfolio — © Harshith Mullapudi

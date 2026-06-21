# Deekshith Polamarasetty - Portfolio

A modern, animated portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed to serve two audiences: **recruiters** (impact + stack) and **clients** (services + outcomes).

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS, dark mode via `next-themes`
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Email:** Resend (via `/api/contact` route)
- **Analytics:** Vercel Analytics + Speed Insights
- **Icons:** lucide-react

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# then fill in RESEND_API_KEY and CONTACT_EMAIL

# 3. Run the dev server
npm run dev
```

Open http://localhost:3000

## Environment Variables

| Variable         | Description                                                       |
| ---------------- | ----------------------------------------------------------------- |
| `RESEND_API_KEY` | API key from https://resend.com                                   |
| `CONTACT_EMAIL`  | Where contact form messages are delivered                         |
| `RESEND_FROM`    | Verified sender address (use `onboarding@resend.dev` for testing) |

## Project Structure

```
app/
  layout.tsx            # Root layout, theme, nav, footer, SEO
  page.tsx              # Home (hero, metrics, about, skills, projects, services, testimonials)
  about/                # (sections live on home; /#about anchor)
  projects/             # Projects grid + dynamic [slug] case studies
  services/             # Services page
  blog/                 # Blog list + dynamic [slug] posts
  contact/              # Contact page
  api/contact/route.ts  # Resend-powered contact endpoint
  sitemap.ts, robots.ts # SEO
components/             # UI + sections (hero, navbar, footer, etc.)
lib/                    # site config + content data (projects, blog, skills)
public/                 # profile.jpg, resume.pdf
```

## Editing Content

- **Profile / links / email:** `lib/site.ts`
- **Projects & case studies:** `lib/projects.ts`
- **Skills, experience, services, testimonials:** `lib/data.ts`
- **Blog posts:** `lib/blog.ts`
- **Profile photo:** replace `public/profile.jpg`
- **Resume:** replace `public/resume.pdf`

### TODOs before launch

- [ ] Update GitHub + LinkedIn URLs in `lib/site.ts`
- [ ] Fill in real **Sangrel** project details in `lib/projects.ts`
- [ ] Replace placeholder **testimonials** in `lib/data.ts`
- [ ] Add live/GitHub links per project in `lib/projects.ts`
- [ ] (Optional) add a `favicon.ico` and OG image in `app/`

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at https://vercel.com/new (Next.js is auto-detected).
3. Add `RESEND_API_KEY`, `CONTACT_EMAIL`, and `RESEND_FROM` in Project Settings -> Environment Variables.
4. Deploy. Every push to `main` auto-deploys.

HTTPS, CDN, and CI/CD are automatic. Add a custom domain anytime under Project -> Settings -> Domains.

## License

Personal project - all rights reserved.

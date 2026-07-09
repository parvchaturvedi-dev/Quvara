# Quvara

Marketing site for **Quvara** — AI-native ERP implementation, agentic AI integration, and Oracle APEX expertise.

Built with **Next.js 15 (App Router)**, **Tailwind CSS v4**, **Framer Motion**, **GSAP**, **Lenis**, and **React Three Fiber**.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Environment

Copy `.env.example` to `.env.local` and fill in the Gmail SMTP credentials used by the
contact form (`app/api/contact/route.js`). Never commit `.env.local`.

## Structure

- `app/` — routes (home, `/modules`, `/modules/*`) + `api/contact`
- `components/` — `layout/`, `sections/`, `ui/`, `brand/`
- `lib/` — site content and data

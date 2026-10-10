# Creativa Care — Next.js Website

Responsive App Router implementation of the Creativa Care UI mockup.

## Run locally

1. Install Node.js 20+.
2. In this folder run:

```bash
npm install
npm run dev
```

3. Open http://localhost:3000

## Pages

- `/` Home
- `/about`
- `/services`
- `/services/personal-care`
- `/services/companionship`
- `/services/light-housekeeping`
- `/services/respite-care`
- `/how-it-works`
- `/for-families`
- `/careers`
- `/faq`
- `/contact`

## Important before production

- Replace demo image URLs with licensed/owned photography.
- Connect the contact form to a real email/CRM/API route.
- Add privacy policy and terms reviewed for Ontario/Canadian requirements.
- Confirm exactly which services Creativa Care is legally authorized to provide. Keep the site non-medical unless appropriate licensing/authorization exists.
- Replace the placeholder email/social links.
- Add real testimonials only with client permission.

## Deploy on Vercel

This site is set up for Vercel’s Next.js runtime.

1. Push `main` to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Leave the default Next.js build settings (`npm run build`).
4. Deploy. Production will be available on the assigned `*.vercel.app` URL, and you can attach `creativacare.ca` in the Vercel project domains settings.

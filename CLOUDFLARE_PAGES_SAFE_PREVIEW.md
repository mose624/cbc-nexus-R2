# CBE Nexus — Cloudflare Pages safe preview

This branch prepares a Cloudflare Pages frontend preview while keeping the existing Render application as the backend.

## Cloudflare Pages project settings

- Connect GitHub repository: `mose624/cbc-nexus-R2`
- Production branch: `cloudflare-pages-safe-preview` (use this only for the initial preview; do not change the live Render deployment)
- Framework preset: None
- Build command: leave blank
- Build output directory: `.`
- Root directory: `/`

The project should initially be tested on its `.pages.dev` preview hostname only. Do not attach `cbenexus.co.ke` or `cbenexus.com`, and do not change DNS, until the preview passes the checks below.

## Backend routing

- `/api/*` is forwarded to the existing Render origin: `https://cbc-nexus-r2.onrender.com`.
- `/global-schools/{country}` is forwarded to Render because that route is rendered dynamically by the current Node application.
- All ordinary static files are served from the Pages deployment.
- Cookies, query strings, request methods and request bodies are preserved by the proxy.

No secrets, Supabase credentials, R2 keys, M-Pesa credentials, or database migrations are added to this branch.

## Preview checks before any domain switch

1. Open the homepage and several existing HTML pages.
2. Check CSS, JavaScript, logos and classroom images.
3. Confirm public resource lists load from the existing backend.
4. Confirm login/session cookies and admin pages work.
5. Confirm teacher registration and vacancy pages load.
6. Test an M-Pesa STK Push only if you are ready to initiate a real payment; do not use a live payment as an initial smoke test.
7. Confirm the M-Pesa callback URL still points to the existing live hostname.
8. Confirm file upload/download flows still use the existing Render, Supabase and R2 services.

Keep Render live and unchanged until all checks pass. Attach custom domains and update DNS only as a separate, explicitly approved cutover.

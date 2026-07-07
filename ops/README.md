# Operations Notes

This folder holds deployment and historical operations material for the SBE
Studio site.

## Layout

- `deploy-scripts/` contains DreamHost/VPS helper scripts used during the
  original deployment and later proxy/systemd pivot. These are historical
  references, not the current production deployment lane.
- `archive/deploy-logs/` contains local copies of historical command output.
- `archive/deploy-bundles/` contains old generated deployment bundles.

The source app lives at the project root in `app/`, `components/`, `lib/`, and
`public/`. Generated folders such as `.next/` and `node_modules/` should not be
treated as source.

## Current Hosting Shape

As of 2026-07-06, the active production lane is GitHub `main` to Vercel:

- GitHub repo: `https://github.com/MONKEEJUMP/sbe-studio.git`
- Vercel account/team: `paulie-pauliewoods-projects`
- Vercel project: `sbe-studio`
- Production site: `https://sbe.studio`
- Vercel project URL: `https://vercel.com/paulie-pauliewoods-projects/sbe-studio`

DreamHost was part of the earlier hosting/DNS journey. Treat the DreamHost
scripts and VPS notes as archive material unless PAULIEWOOD explicitly asks to
recover or inspect the old host.

## Vercel Production Flow

For normal releases:

```powershell
pnpm lint
pnpm typecheck
pnpm build
git status --short
git add <exact files>
git commit -m "<message>"
git push origin main
```

After pushing, wait for the connected Vercel deployment and verify the live
domain directly:

```powershell
curl.exe -I https://sbe.studio/
curl.exe -I https://sbe.studio/receipts
```

When content, stats, or layout changes ship, also browser-check the homepage
and Receipts page. Do not claim the live site is updated until `https://sbe.studio/`
is verified after the Vercel deployment is ready.

## Historical DNS Notes

During the migration, Vercel requested these records:

- apex/root `sbe.studio` -> `76.76.21.21`
- `www.sbe.studio` -> `76.76.21.21`

DreamHost may still hold DNS records or registrar settings, but it is not the
current app host for the production website.

Before running any deployment script, review it first and make sure the target
host, username, Node path, and `.htaccess` strategy still match the intended
target. Do not run old DreamHost deployment scripts for normal Vercel releases.

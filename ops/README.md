# Operations Notes

This folder holds deployment and historical operations material for the SBE
Studio site.

## Layout

- `deploy-scripts/` contains DreamHost/VPS helper scripts used during the
  original deployment and later proxy/systemd pivot.
- `archive/deploy-logs/` contains local copies of historical command output.
- `archive/deploy-bundles/` contains old generated deployment bundles.

The source app lives at the project root in `app/`, `components/`, `lib/`, and
`public/`. Generated folders such as `.next/` and `node_modules/` should not be
treated as source.

## Current Hosting Shape

As of 2026-05-11, the live DNS for `sbe.studio` still resolves to the
DreamHost VPS:

- `sbe.studio` -> `69.163.199.91`
- reverse DNS: `vps63781.dreamhostps.com`
- remote app dir from the old scripts: `/home/dh_isibk9/sbe.studio`

The checked-in `app.js` starts Next.js in production mode on `127.0.0.1:3000`
for DreamHost/Apache proxying. The latest scripts in `deploy-scripts/` indicate
the production host was pivoted from Passenger-only startup toward a user
systemd service behind Apache proxy rules.

## Vercel Migration

The project has been created and linked in Vercel:

- Vercel account: `paulie-pauliewoods-projects`
- Vercel project: `sbe-studio`
- Project ID: `prj_0dd82j71SRvY4flgVLACjCiHRSmV`
- Production alias: `https://sbe-studio.vercel.app`

The domains `sbe.studio` and `www.sbe.studio` have been added to the Vercel
project, but they are not live on Vercel until DreamHost DNS is changed.

Cutover records Vercel requested:

```text
A    sbe.studio      76.76.21.21
A    www.sbe.studio  76.76.21.21
```

After changing DNS, verify with:

```bash
vercel domains inspect sbe.studio
vercel domains inspect www.sbe.studio
curl -I https://sbe.studio/
```

Before running any deployment script, review it first and make sure the target
host, username, Node path, and `.htaccess` strategy still match the live
DreamHost account.

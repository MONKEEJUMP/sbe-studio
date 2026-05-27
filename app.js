// Entry point for Next.js 14 App Router running behind DreamHost's
// Apache Proxy Server. Listens on 127.0.0.1:3000 only; the outside
// world reaches the app via Apache proxying sbe.studio -> :3000.
//
// Managed by the user-level systemd unit at
//   ~/.config/systemd/user/sbe-studio.service
// Linger is enabled so the service survives SSH disconnects + reboots.

const { createServer } = require("http");
const next = require("next");

const dev = false;
const port = parseInt(process.env.PORT || "3000", 10);
const listenHostname = process.env.HOSTNAME || "127.0.0.1";
const publicHostname = "sbe.studio";

const app = next({ dev, hostname: publicHostname, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, listenHostname, () => {
    console.log(
      `> Ready on http://${listenHostname}:${port} (public: https://${publicHostname})`
    );
  });
});

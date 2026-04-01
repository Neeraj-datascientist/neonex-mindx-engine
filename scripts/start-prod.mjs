import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = String(process.env.PORT || "3000");
const hostname = process.env.HOST || "0.0.0.0";

const child = spawn("npx", ["next", "start", "-H", hostname, "-p", port], {
  cwd: root,
  stdio: "inherit",
  shell: true,
  env: process.env,
});

child.on("exit", (code) => process.exit(code === null ? 1 : code));

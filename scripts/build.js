const args = ["run build"];
const opts = { stdio: "inherit", cwd: "nytreact", shell: true };
require("child_process").spawn("npm", args, opts);

const path = require("path");

console.log("Directory namee:", path.dirname(__filename));

console.log("File name:", path.basename(__filename));

console.log("file extension", path.extname(__filename));

const joinPath = path.join("/user", "documents", "node", "projects");
console.log("joined path", joinPath);

const resolvePath = path.resolve("user", "documents", "node", "project");
console.log("resolved path", resolvePath);

const normalizePath = path.normalize("user/.documents/../node/projects");
console.log("normalized path", normalizePath);

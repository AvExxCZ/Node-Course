const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else if (url === "/projects") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Projects page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Page not found...");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log("Server is now listening on port " + port);
});

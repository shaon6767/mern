const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node</title></head>");
  res.write("<body><h1>Hello from Node</h1></body>");
  res.write("</html");
  res.end();
  console.log(req);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

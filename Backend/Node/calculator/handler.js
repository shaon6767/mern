const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
        <head><title>Calculator</title></head>
        <body>  
            <h1>Welcome to the Calculator</h1>
            <a href="/calculator">Goto calcultor</a>
            </body>
        </html>
        `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(` <html>
        <head><title>Calculator</title></head>
        <body>  
            <h1>Heres the Calculator</h1>
            <form action= "/calculate-results" method = "POST">
            <input type="number" name="num1" placeholder="Enter first number" required>
            <input type="number" name="num2" placeholder="Enter second number" required>
            <input type="submit" value="Calculate">
            </form>
            </body>
        </html>`);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-results" &&
    req.method === "POST"
  ) {
    return sumRequestHandler(req, res);
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`
        <html>
        <head><title>Calculator</title></head>
        <body>  
            <h1>404 Does not exist</h1>
            <a href="/">Goto Home</a>
            </body>
        </html>
        `);
  return res.end();
};

exports.requestHandler = requestHandler;

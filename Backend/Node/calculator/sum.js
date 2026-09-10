const sumRequestHandler = (req, res) => {
  console.log("Calculating the sum", req.url);

  const body = [];
  req.on("data", (chunk) => body.push(chunk));

  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);

    const result = Number(bodyObj.num1) + Number(bodyObj.num2);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Sum is: ${result}</h1>`);
  });
};

exports.sumRequestHandler = sumRequestHandler;

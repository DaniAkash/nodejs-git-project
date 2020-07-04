const http = require("http");

http
  .createServer((req, res) => {
    switch (request.url) {
      case "/":
        response.writeHead(200, {
          "Content-Type": "text/html",
        });
        response.write("<h1>Home Page!</h1>");
        response.end();
        break;
      case "/about":
        response.writeHead(200, {
          "Content-Type": "text/html",
        });
        response.write("<h2>About Page!</h2>");
        response.end();
        break;
    }
  })
  .listen(8080);

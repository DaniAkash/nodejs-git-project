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
      default:
        response.writeHead(404, {
          "Content-Type": "text/html",
        });
        response.write("<p>404 Page Not found!</p>");
        response.end();
        break;
    }
  })
  .listen(8080);

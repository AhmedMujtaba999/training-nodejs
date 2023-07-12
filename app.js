const http = require("http");
const fs = require('fs')

var i = 0;
const server = http.createServer(function (req, res) {
  console.log(req.url);
  if (req.url !== '/favicon.ico') {

    res.setHeader("content-type", "text/html");
    if (req.url == '/') {
      res.write(
        "<html> <head>     <title>enter message</title> </head> <body>     <form action='/message' method='POST'>         <input type='text' name='mes'><br>     </form>    write your message </body> </html>");
      return res.end();
    }

    if (req.url === '/message') {
      fs.writeFileSync('message.txt', 'dummy');
      res.setHeader = ('Location', '/hey');
      res.statusCode = 302;

      return res.end();
    }

    console.log(req.url);
  }
});

server.listen(3000);

const fs = require('fs')
const http = require("http");
const server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE html>");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello World!");
  response.write("</body>");
  response.write("</html>");
  response.end();
});

// server.listen(80);



const server = http.createServer( (req, res) => {
    fs.readFile('holaMundo.txt', (err, data) => {
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data.toString());
        res.end();
    });
});
server.listen(8000)
// console.log("Server is listening");
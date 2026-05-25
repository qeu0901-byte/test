const http = require("http");

http.createServer((req, res) => {
  res.write("hello render");
  res.end();
}).listen(3000);

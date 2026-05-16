const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write("<h1>Welcome to Node.js Server</h1>");
    res.write("<p>This is my first Node.js web page</p>");

    res.end();
});

server.listen(5000, () => {
    console.log("Server running at http://localhost:5000/");
});
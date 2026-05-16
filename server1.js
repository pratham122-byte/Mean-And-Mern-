const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url == "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<h1>Home Page</h1>");
        res.write("<p>Welcome to Node.js Server</p>");
        res.end();
    }

    else if (req.url == "/about") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<h1>About Page</h1>");
        res.write("<p>This is About Node.js</p>");
        res.end();
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write("<h1>404 Page Not Found</h1>");
        res.end();
    }

});

server.listen(2000, () => {
    console.log("Server running at http://localhost:2000/");
});
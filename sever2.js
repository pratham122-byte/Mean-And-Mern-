const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const date=new Date();

    res.write("<h1>Node.js Server</h1>");
    res.write("<p>current date and time</p>");
    res.write("<h1>"+date+ "<h1>")

    res.end();
});

server.listen(5000, () => {
    console.log("Server running at http://localhost:5000/");
});
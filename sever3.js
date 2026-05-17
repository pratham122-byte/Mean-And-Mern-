const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url == "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<h1>Home Page</h1>");
        res.write("<p>Welcome to Node.js Server</p>");
        const date=new Date();
        res.write("<h1>Node.js Server</h1>");
        res.write("<p>current date and time</p>");
        res.write("<h1>"+date+ "<h1>")
        res.end();
    }

    else if (req.url == "/about") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<form action='/submit' method='post'>");
        res.write("<input type='text' name='name' placeholder='Enter your name'>");
        res.write("<input type='email' name='email' placeholder='Enter your email'>");
        res.write("<input type='submit' value='Submit' onclick='alert('Form submitted!')'>");
        res.write("</form>");
        
        res.end();
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write("<h1>404 Page Not Found</h1>");
        res.end();
    }

});
server.listen(5000, () => {
    console.log("Server running at http://localhost:5000/");
});


const express = require('express');
const app = express();


app.use(express.json())

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // move to next middleware/route
});


app.get('/', (req, res) => {
    res.send("Home Page");
});


app.get('/error', (req, res, next) => {
    const err = new Error("Something went wrong!");
    next(err); // pass error to error handler
});


app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({
        message: err.message
    });
});

app.listen(3000, () => {
    console.log("Server running on port : http://localhost:3000");
});
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample data (in-memory)
let students = [
    { id: 1, name: "Anu", course: "MERN" },
    { id: 2, name: "Rahul", course: "MEAN" }
];

// GET - Retrieve all students
app.get('/students', (req, res) => {
    res.json(students);
});

// GET - Retrieve single student by ID
app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    if (student) {
        res.json(student);
    } else {
        res.status(404).send("Student not found");
    }
});

// POST - Add new student
app.post('/students', (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// PUT - Update student
app.put('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);
    if (student) {
        student.name = req.body.name;
        student.course = req.body.course;
        res.json(student);
    } else {
        res.status(404).send("Student not found");
    }
});

// DELETE - Remove student
app.delete('/students/:id', (req, res) => {
    students = students.filter(s => s.id != req.params.id);
    res.send("Student deleted successfully");
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

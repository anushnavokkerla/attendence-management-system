// const express = require('express');
// const app = express();

// app.use(express.json());

// let students = [];

// // Home Route
// app.get('/', (req, res) => {
//     res.send('Student Management API');
// });

// // Get all students
// app.get('/students', (req, res) => {
//     res.json(students);
// });

// // Add a student
// app.post('/students', (req, res) => {
//     const data = req.body;

//     if (Array.isArray(data)) {
//         students.push(...data);
//     } else {
//         students.push(data);
//     }

//     res.status(201).json({
//         message: 'Student Added'
//     });
// });

// // Get student by ID
// app.get('/students/:id', (req, res) => {
//     const student = students.find(
//         s => s.id == req.params.id
//     );

//     if (!student) {
//         return res.status(404).json({
//             message: 'Student not found'
//         });
//     }

//     res.json(student);
// });

// // Update student by ID
// app.put('/students/:id', (req, res) => {
//     const student = students.find(
//         s => s.id == req.params.id
//     );

//     if (!student) {
//         return res.status(404).json({
//             message: 'Student not found'
//         });
//     }

//     student.id = req.body.id || student.id;
//     student.name = req.body.name || student.name;
//     student.course = req.body.course || student.course;
//     student.dept = req.body.dept || student.dept;

//     res.json({
//         message: 'Student Updated',
//         student
//     });
// });

// // Delete student by ID
// app.delete('/students/:id', (req, res) => {
//     const index = students.findIndex(
//         s => s.id == req.params.id
//     );

//     if (index === -1) {
//         return res.status(404).json({
//             message: 'Student not found'
//         });
//     }

//     const deletedStudent = students.splice(index, 1);

//     res.json({
//         message: 'Student Deleted',
//         student: deletedStudent[0]
//     });
// });

// // Start server
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

const express = require("express")
const mongoose = require("mongoose")
const app=express()
app.use(express.json)
mongoose.connect('mongodb://localhost:27017/studentDb')
.then(()=>console.log("mongodb connected"))
.catch(err=>console.log(err))

const studentSchema = new mongoose.Schema({
    name:String,
    course:String,
    dept:String
})
const student = mongoose.model('student',studentSchema)
app.get("/",(req,res)=>{
    try{
        const student = new student();
        res.send("student management api")
    }
})
app.post("students",(req,res)=>{
    try{
        const student = new student(req.body);
        await student.save();
        res.status(201).json({
            message:'student added successfully',student
        })
    }
    catch(err){
        res.status(500).json({error:err.message})

    }
})
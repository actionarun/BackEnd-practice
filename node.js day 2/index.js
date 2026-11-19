import express from "express";  //Express import செய்கிறோம்

const app = express();   //Express application create செய்கிறோம்

app.use(express.json());   //JSON data parse செய்யும் middleware use செய்கிறோம்

// Temporary student data
 let students =[
    {id:1,name:"arun",age:22},
    {id:2,name:"kumar",age:21}
 ]
// GET - Read students
 app.get("/students",(req,res)=>{
    res.json(students)
 })

 // POST - Add student
app.post("/students",(req,res)=>{
    const newStudent =req.body;
    students.push(newStudent)

      res.status(201).json({    //201 என்ற HTTP status code என்பது resource successfully created என்பதைக் குறிக்கும்.
        message: "Student added successfully",
        data: newStudent
    });
}) 

app.get("/", (req, res) => {
    res.send("Welcome to Express.js");
});     //GET route create செய்கிறோம்

app.listen(3000, () => {
    console.log("Server running on port 3000");
});   //Server start செய்கிறது

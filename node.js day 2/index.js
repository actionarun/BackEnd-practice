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

// PUT - Update student
app.put("/students/:id",(req,res)=>{
    const id = Number(req.params.id)
    const student =students.find((s)=> s.id === id)

    if(!student){
        return res.status(404).json({
            message:"student not found"
        })
    }
    student.name=req.body.name
    student.age=req.body.age

    res.json({
        message:"studdent update sussfully",
        data:student
    })
})


// DELETE - Delete student

app.delete("/students/:id",(req,res)=>{
    const id =Number(req.params.id)
    const student =students.find((s)=> s.id===id)

    if(!student){
        return res.status(404).json({
            message:"student not found"
        })
    }
    students =students.filter((s)=>s.id !==id)

    res.json({
        message:"student delete sussfully"
    })
})
app.get("/", (req, res) => {
    res.send("Welcome to Express.js");
});     //GET route create செய்கிறோம்

app.get("/students/:id", (req, res) => {
    res.json({
        studentId: req.params.id
    });
});

app.get("/search", (req, res) => {
    res.json({
        studentName: req.query.name,
        course: req.query.course
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});   //Server start செய்கிறது

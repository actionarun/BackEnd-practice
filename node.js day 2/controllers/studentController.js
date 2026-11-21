let students = [
    { id: 1, name: "Arun",age:22 },
    { id: 2, name: "Kumar", age:31 }
];

export const getStudents = (req, res) => {
    res.json(students);
};

// Create Student
export const addStudent = (req, res) => {
   const student = req.body;
   students.push(student);

   res.status(201).json({
       message: "Student added successfully",
       data: student
   });

};

export const updateStudent = (req, res) => {
    const id = Number(req.params.id);

    let student = students.find((s) => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.age = req.body.age;

    res.json({
        message: "Student updated successfully",
        data: student
    });
};


export const deleteStudent = (req, res) => {
    const id = Number(req.params.id);
    let student = students.find((s) => s.id === id);
    if(!student){
        return res.status(404).json({
            message:"student not found"
        })
    } 

    students =students.filter((s)=>s.id !==id)

    res.json({
        message:"student delete sussfully"
    })
    

};
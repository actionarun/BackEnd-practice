import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  course: String,
  marks: Number
});

const Student = mongoose.model("Student", studentSchema);

async function createStudent() {
try {
  const student =await Student.create({
    name:"Arun",
    age:21,
    email:"action@gmail.com",
    course:"full stack",
    marks:85
  })
  console.log("student created",student);

} catch (error) {
  console.log("error",error.message)    
}
}



async function getStudents() {
  try {
    const students =await Student.find();
    console.log("all student",students)
  } catch (error) {
    console.log(error.message)
  }
}


async function getStudent() {
  try {
    const student =await Student.findOne({
      email:"action@gmail.com"
    })
    console.log("student",student)
  } catch (error) {
    
  }
}


async function updateStudent() {
  try {
    const student = await Student.findOneAndUpdate(
      { email: "action@gmail.com" },
      { $set: { marks: 90 } },
      { new: true }
    );

    console.log("Updated Student:", student);

  } catch (error) {
    console.log("Error:", error.message);
  }
}



async function deleteStudent() {
  try {
    const student = await Student.findOneAndDelete({
      email: "action@gmail.com"
    });

    console.log("Deleted Student:", student);
  } catch (error) {
    console.log(error.message);
  }
}


async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/CollegeDB");
    console.log("MongoDB Connected Successfully");
    // await  createStudent();
    // await getStudents()
    // await getStudent()
    // await updateStudent()
    // await deleteStudent()
  } catch (error) {
    console.log("Database Connection Failed", error);
  }
}

connectDB();

import express from "express"
import studentRoutes from "./routes/studentRoutes.js";

const app =express()

// JSON Middleware
app.use(express.json())

// Student routes
app.use("/students", studentRoutes);


// Server
app.listen(3000,()=>{
    console.log("Server running on port 3000")
})
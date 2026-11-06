// import fs from "node:fs"
// fs.writeFileSync("notes.txt","hello arun")
// console.log("file created sussfully")


// fs.appendFileSync("notes.txt",".\nI am learning Node.js")

// const data = fs.readFileSync("notes.txt","utf-8")
// console.log(data)

// if (fs.existsSync("notes.txt")) {
//   fs.unlinkSync("notes.txt");
//   console.log("File deleted successfully");
// } else {
//   console.log("File not found");
// }


// fs.mkdirSync("myFolder");

// console.log("Folder created successfully");

// const files = fs.readdirSync(".");

// console.log(files)

// const myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Task completed successfully");
//   } else {
//     reject("Task failed");
//   }
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// import path from "node:path";

// const filePath = "C:/Users/Dell/Desktop/notes.txt";

// console.log(path.basename(filePath));
// console.log(path.dirname(filePath));
// console.log(path.extname(filePath));


// import path from "node:path";

// const file1 = path.join("backend", "uploads", "image.png");
// const file2 = path.resolve("backend", "uploads", "image.png");

// console.log("Join:", file1);
// console.log("Resolve:", file2);
// import http from "node:http";

// const server = http.createServer((req, res) => {

//   if (req.method === "GET" && req.url === "/students") {

//     res.writeHead(200, {
//       "Content-Type": "application/json"
//     });

//     res.end(JSON.stringify([
//       { id: 1, name: "Arun" },
//       { id: 2, name: "Kumar" }
//     ]));

//   } else {
//     res.writeHead(404);
//     res.end("Route Not Found");
//   }

// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

// const server = http.createServer((req, res) => {

//   if (req.method === "POST" && req.url === "/students") {

//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk;
//     });

//     req.on("end", () => {
//       const student = JSON.parse(body);

//       res.writeHead(201, {
//         "Content-Type": "application/json"
//       });

//       res.end(JSON.stringify({
//         message: "Student created successfully",
//         data: student
//       }));
//     });

//   } else {
//     res.writeHead(404);
//     res.end("Route Not Found");
//   }

// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

// import http from "node:http";

// let students = [
//   { id: 1, name: "Arun", age: 22 },
//   { id: 2, name: "Kumar", age: 23 }
// ];

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "application/json");

//   // GET
//   if (req.method === "GET" && req.url === "/students") {
//     res.end(JSON.stringify(students));
//   }

//   // PUT
//   else if (req.method === "PUT" && req.url === "/students/1") {
//     let body = "";

//     req.on("data", chunk => {
//       body += chunk;
//     });

//     req.on("end", () => {
//       const updatedData = JSON.parse(body);

//       students[0] = { ...students[0], ...updatedData };

//       res.end(JSON.stringify({
//         message: "Student updated successfully",
//         data: students[0]
//       }));
//     });
//   }

//   // DELETE
//   else if (req.method === "DELETE" && req.url === "/students/1") {
//     students = students.filter(student => student.id !== 1);

//     res.end(JSON.stringify({
//       message: "Student deleted successfully",
//       data: students
//     }));
//   }

//   else {
//     res.writeHead(404);
//     res.end(JSON.stringify({ message: "Route Not Found" }));
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });


import fs from "node:fs";
import path from "node:path";

const folderPath = "./files";
const filePath = path.join(folderPath, "notes.txt");

// Create folder
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

// Create and write file
fs.writeFileSync(filePath, "Welcome to Node.js");

// Read file
const data = fs.readFileSync(filePath, "utf-8");

console.log("File Content:", data);

// Append content
fs.appendFileSync(filePath, "\nLearning Backend Development");

// Read updated content
const updatedData = fs.readFileSync(filePath, "utf-8");

console.log("Updated Content:", updatedData);


// Delete file
if (fs.existsSync(filePath)) {
  fs.unlinkSync(filePath);
  console.log("File deleted successfully");
} else {
  console.log("File not found");
}
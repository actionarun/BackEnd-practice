import express from 'express';

const app = express();

// Middleware
function myMiddleware(req,res,next){
    console.log("middleware excuted")

    next()
}

// Authentication Middleware
function authMiddleware(req,res,next){
  const token =req.headers.authorization; //Client அனுப்பும் Authorization header-ல் உள்ள value-ஐ பெறுகிறது.
  if(token==="my-secret-token"){
    next()
  }else{
    res.status(401).json({
         message: "Unauthorized! Please login."
    })
  }
}
// Public Route
app.get('/public',(req,res)=>{
    console.log("This is a public page")
})

// Protected Route
app.get("/profile",authMiddleware,(req,res)=>{
      res.send("Welcome to your profile");
})

// Register middleware
app.use(myMiddleware);

app.get('/', (req, res) => {
  res.send('welcome to middle ware');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

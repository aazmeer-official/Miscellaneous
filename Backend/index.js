const express = require("express");
const app = express();
const port = 8080;
app.listen(port,()=>{
    console.log("App is listening..")
})

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get("/register",(req,res)=>{
    let {user,pass} = req.query
    res.send(`Standard GET Request ${user}`)
})
app.post("/register",(req,res)=>{
    let {user,pass} = req.body
    res.send(`Welcome ${user}`)
})


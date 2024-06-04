const express = require("express")

const app =  express();
app.set("view engine","ejs");

app.use(express.static("./public"))

app.get("/",(req,res)=>{
  // res.end("hello world")
  res.render("index",{name:"karan singh"})
})

app.listen(3002,()=>{console.log("server running...");})
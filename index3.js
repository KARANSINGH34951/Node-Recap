
const express=  require("express")

const app= express()

app.get("/",(req,res)=>{
  res.end("Home page")
})

app.get("/about",(req,res)=>{
  res.end("About Page")
})

app.listen(9900,()=>{
  console.log("running server");
})

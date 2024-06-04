const express = require("express")
const users = require("./MOCKDATA.json")
const fs = require("fs")

const app = express()
const PORT = 6600;

app.use(express.urlencoded({extended:false}))

app.get('/api/users',(req,res)=>{
  
  return res.json(users)
})
app.post('/api/users',(req,res)=>{
  const body = req.body;
  // console.log(body);
  users.push(body)
  fs.writeFile('./MOCKDATA.json',JSON.stringify(users),(err,data)=>{ 
    return res.json({status:"sucess",id:users.length})
  })
  // return res.json(users)
})


app.get('/users',(req,res)=>{
  const html = `
    <ul>
      ${users.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join('')}
    </ul>
  `
  res.send(html)
})

// app.get('/users/:id',(req,res)=>{
//   const id = req.params.id
//   const user = users.find(user=>user.id==id)
//   if(user){
//     res.json(user)  
//   }
// })
  

app.listen(PORT,()=>{
  console.log("running server 1");
})
// const { log } = require('console');
// const http = require("http")

// const users= [
//   {Id:1,name:"karan"},
//   {Id:2,name:"arjun"},
//   {Id:3,name:"gukesh"},
// ]

// const server = http.createServer((req,res)=>{
//   if(req.url==='/api/users' && req.method=='GET'){
//     res.setHeader('content-Type','application/json')
//     res.write(JSON.stringify(users));
//     res.end()
//   }
  
//   else{
//     res.setHeader('content-Type','application/json')
//     res.statusCode=404;
//     res.write("Not found route");
//     res.end()
//   }
// })


// server.listen(4000,()=>{
//   console.log("server running");
// })
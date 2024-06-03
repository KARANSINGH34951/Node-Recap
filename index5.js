const http = require('http')

const server = http.createServer((req,res)=>{
  if(req.url=='/api/users'){
    console.log("serve running");
  }
})

server.listen(5500,()=>{
  console.log("something ");
})


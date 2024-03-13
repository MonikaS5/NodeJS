var fs= require('fs');
const http= require('http');

http.createServer((req,res)=>{

console.log("Server Created");

fs.unlink('myNewFile6.txt', (err)=>{
    if(err) throw err;
    console.log("myNewFile6.txt is deleted");
    return res.end();
  });

}).listen(8081);
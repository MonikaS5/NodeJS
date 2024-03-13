
var fs = require('fs');
const http = require('http');

http.createServer((req,res)=>{
    console.log("Server Created");

    fs.appendFile('myNewFile2.txt', 'Adding this content-append file', (err,data)=>{

        if(err) throw err;
        console.log("File updated");

        return res.end();
    })
}).listen(4048);
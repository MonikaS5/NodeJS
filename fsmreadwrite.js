const { ifError } = require('assert');
var fs = require('fs');

var http = require('http');

http.createServer((req, res)=>{
    console.log("Server created");

    fs.writeFile('myNewFile2.txt', 'Hello, It\'s my New File for read write file', function(err){
        if(err){
            return console.error(err);
        }
        console.log("Data written succussfully");
        fs.readFile('myNewFile2.txt',function(err, data){
            if(err){
                return console.error(err);
            }
            console.log("Asynchronuos read" + data);
        })
    })

}).listen(8081);
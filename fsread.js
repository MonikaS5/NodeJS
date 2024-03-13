
/* read file using fs module

Program -1

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8087);


*/

////////////////////////////////////////////////////////////


/* program -2   Read file using flag */

var http = require('http');
var fs = require('fs');
http.createServer((req, res)=> {

  console.log("server created");
var data = Buffer.from('myNewFile.txt', 'utf-8');
  fs.open(data, 'r', (err, data)=> {
    
    if (err) {
      return console.error(err);
   }
         
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.write(data);
    //console.log("file opened");
    return res.end();
  });
}).listen(8087);












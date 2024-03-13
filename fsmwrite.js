// create or write file

var fs = require('fs');

fs.writeFile('myNewFile7.txt', 'Hello World, Happy Coding...!', (err)=>{

    if(err)
    throw(err);
console.log('File Saved...!');
});




// Rename File
var fs =require('fs');

fs.rename('myNewFile4.txt','myRenamedFile.txt', (err)=>{

    if(err) throw err;
    console.log("File Renamed")
});
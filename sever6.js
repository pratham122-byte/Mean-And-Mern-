const fs=require('fs')

fs.writeFile('sample.txt','hello! this file is created using node.js .',(err)=>{
    if(err) throw err;
    console.log("file created add content written successfully .");


fs.appendFile('sample.txt','/n this line is appended to the file .',(err) =>{
    if(err) throw err;
    console.log("content appended successfully.");

fs.readFile('sample.txt','utf8',(err,data)=>{
        if(err) throw err
        console.log("file content");
        console.log(data);

   
fs.writeFile('copy.txt', data, (err) => {
    if (err) throw err;
    console.log("File copied to copy.txt");

                
fs.rename('copy.txt', 'newfile.txt', (err) => {
    if (err) throw err;
    console.log("File renamed to newfile.txt");

                    
fs.unlink('newfile.txt', (err) => {
if (err) throw err;
console.log("File deleted successfully");


});
});
});
})
})
})
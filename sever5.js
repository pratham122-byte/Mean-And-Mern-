const fs = require('fs')

fs.writeFile('sample.txt','My name is pratham kamath and this is node file \n', (err) => {
    if (err) throw err
    console.log("writefile executed successfully");

})

fs.appendFile('sample.txt','this is appended into file', (err) => {
    if (err) throw err
    console.log("appendfile executed successfully");

})

fs.readFile('sample.txt','utf-8', (err,data) => {
    if (err) throw err
    console.log(data)
    console.log("readfile executed successfully");

}) 
fs.rename('sample.txt','rename.txt', (err) => {
    if (err) throw err
    console.log("renamefile executed successfully");

})

// fs.unlink('copy.txt', (err) => {
    // if (err) throw err
    // console.log("file executed successfully");

// })
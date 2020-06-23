//filesystem module always works hand in hand with the path module
const ourFs = require('fs')
const ourPath = require('path')

// //created a new directory with a new folder in it. Use mkdir method
// const createFolder = ourFs.mkdir(ourPath.join(__dirname, '/html'), {}, (error) =>{
//     if(error) {
//         console.log("Error creating your folder")
//     }
//     else{
//         console.log("folder created succesfully")
//     }
// })
// console.log(createFolder)

// //writing something inside our File. use writeFile method
// const createFile = ourFs.writeFile(ourPath.join(__dirname, '/html', 'index.html'), "<h1>this is it <h1>", (error) =>{
//     if (error){
//         console.log ("file not created succesfully")
//     }
//     else{
//         console.log ("file was created successfully")
//     }
// })
// console.log (createFile)

//read from your file
const readFile = ourFs.readFile(ourPath.join(__dirname, '/html', 'index.html'), 'utf8', (error, data) =>{
    //whatever will be read is stored in the argument data
    if (error){
        console.log("Error")
    }
    else{
        console.log(data)
    }
})
console.log(readFile)
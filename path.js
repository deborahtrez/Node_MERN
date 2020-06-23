const ourPath = require('path')

//give me the directory of this file in which i am working
const ourDirectory = ourPath.dirname(__filename)
console.log (ourDirectory)

//extension name of our file
const fileExtension =   ourPath.extname(__filename)
console.log(fileExtension)

//name of file
const ourBase = ourPath.basename(__filename)
console.log(ourBase)

//creating new path
const newPath = ourPath.join(__dirname, 'css', 'index.css')
console.log(newPath)
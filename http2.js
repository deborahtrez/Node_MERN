//we are going to create a better server than the one in http.js
const ourHttp = require ('http')
const ourPath = require('path')
const ourFs = require('fs')

const ourServer = ourHttp.createServer((request, response)=>{
    if(request.url === "/"){
        ourFs.readFile(ourPath.join(__dirname, 'index.html'), (error, data) =>{
            response.writeHead(200, {'content-type': 'text/html'})
            //everything in the html file will be stored in the argument'data'
            response.write(data)
            response.end()
        })
    }
    if(request.url === "/about"){
        ourFs.readFile(ourPath.join(__dirname, 'about.html'), (error, data) =>{
            response.writeHead(200, {'content-type': 'text/html'})
            response.write(data)
            response.end()
        })
    }
})

ourServer.listen(3000, () =>{
    console.log('My Server is up and running')
})
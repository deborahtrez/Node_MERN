//we are going to create a basic server using the http module

const ourHttp = require('http')

const ourServer = ourHttp.createServer((request, response) => {
    //the createServer method always has two methods
    response.write('Welcome to migrant solutions')
    console.log(request)
    //end the response before another request is sent
    response.end()
})

//we need to listen for the response
ourServer.listen(3000, () => {
    console.log ('My server is up and running bitch')
})
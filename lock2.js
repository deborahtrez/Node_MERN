const express = require('express')
const ourPath = require ('path')

//instantiate express app
const app = express()

app.use(express.static(ourPath.join(__dirname, 'public')))

app.listen(3000, () =>{
    console.log('server is running')
})
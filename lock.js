//All that we have been doing willbe made much easier with express
const express = require('express')
const ourFs = require('fs')
const ourPath = require ('path')

//created an app called app and saved it in express
const app = express()

app.get('/', (request, response) =>{
    response.send('<h1>This is a response</h1>')
})


app.listen(3000, () =>{
    console.log('server is running')
})
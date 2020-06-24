const express = require('express')
const mimic = require('./mimic')
//instantiate express app
const app = express()

//get function takes two functions: the url and the callback function
app.get('/api/mimic', (request, response) =>{
    response.json(mimic)
})

app.listen(3000, () =>{
    console.log('server is running')
})
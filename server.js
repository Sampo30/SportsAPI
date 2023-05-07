const express = require('express')
const mongoose = require('mongoose')
const app = express()


//routes

app.get('/', (reg, res) => {
    res.send('Hello Sports API')
})

app.get('/blog', (reg, res) => {
    res.send('Hello Blog')
})



mongoose.
connect('mongodb+srv://admin:1234admin@sampocluster.cmcmgou.mongodb.net/SportsAPI?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log('Node API is running on port 3000')
    });
}).catch((error) => {
    console.log(error)
})
const express = require('express')
const app = express()

//routes

app.get('/', (reg, res) => {
    res.send('Hello Sports API')
})

app.listen(3000, ()=> {
    console.log('Node API is running on port 3000')
})
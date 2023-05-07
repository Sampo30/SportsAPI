const express = require('express')
const mongoose = require('mongoose')
const Player = require('./models/playerModel')
const app = express()

app.use(express.json())

//routes

app.get('/', (reg, res) => {
    res.send('Hello Sports API')
})

app.get('/blog', (reg, res) => {
    res.send('Hello Blog')
})

app.get('/players', async(req, res) => {
    try {
        const players = await Player.find({});
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/players/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const player = await Player.findById(id);
        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/players', async(req, res) => {
    try {
        const player = await Player.create(req.body)
        res.status(200).json(player);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// update player

app.put('/players/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const player = await Player.findByIdAndUpdate(id, req.body);
        if(!player){
            // can not find players in database
            return res.status(404).json({message: `cannot find any player with ID ${id}`})
        }
        const updatedPlayer = await Player.findById(id);
        res.status(200).json(updatedPlayer);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a player

app.delete('/players/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const player = await Player.findByIdAndDelete(id);
        if(!player){
            return res.status(404).json({message: `cannot find any player with ID ${id}`})
        }
        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
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
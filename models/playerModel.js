const mongoose = require('mongoose')

const playerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter players name"]
        },
        number: {
            type: Number,
            required: true,
            default: 0
        },
        position: {
            type: String,
            required: [true, "Please enter players position"],
        },
        goals: {
            type: Number,
            required: true,
            default: 0
        },
        assists: {
            type: Number,
            required: true,
            default: 0
        },
        points: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
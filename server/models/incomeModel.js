const mongoose = require("mongoose")

const Schema = mongoose.Schema

const incomeSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    incomeAmount:{
        type: Number,
        required: true
    },
    incomeDate:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    }
}, {timestamps: true})

module.exports = mongoose.model('Income', incomeSchema)
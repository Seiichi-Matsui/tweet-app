const { default: mongoose } = require("mongoose")

const Schema = mongoose.Schema

const ComentSchema = new Schema({
    userName: String,
    userComent: String
})

module.exports = mongoose.model('Coment', ComentSchema)
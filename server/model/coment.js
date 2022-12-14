const { default: mongoose } = require("mongoose")

const Schema = mongoose.Schema

const ComentSchema = new Schema({
    userName: String,
    userComent: {type: String, required: true, unique: false, lowercase: true, max: [30, '最大30文字まで']},
    timeData: String
})

module.exports = mongoose.model('Coment', ComentSchema)


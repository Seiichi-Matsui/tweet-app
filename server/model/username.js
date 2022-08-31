const { default: mongoose } = require("mongoose")

const Schema = mongoose.Schema

const UserNameSchema = new Schema({
    userName: String
})

module.exports = mongoose.model('UserName', UserNameSchema)
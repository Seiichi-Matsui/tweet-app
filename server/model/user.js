const { default: mongoose } = require("mongoose")
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {type: String, required: true, max: [10, 'ユーザー名は最大10文字まで']},
    email: {type: String, required: true, lowercase: true, unique: true, max: [30, '最大30文字まで']},
    password: {type: String, required: true, max: [10, '最大１０文字まで'], min: [3, '3文字以上']}
})

UserSchema.methods.hasSamePassword = function(inputPassword) {
    const user = this
    return bcrypt.compareSync(inputPassword, user.password)
}


UserSchema.pre("save", function(next) {
    const user = this
    const  saltRounds  =  10
    bcrypt.genSalt(saltRounds, function( err, salt) { 
        bcrypt.hash(user.password, salt, function( err, hash) { 
            user.password = hash
            next()
        })
    })
})

module.exports = mongoose.model('User', UserSchema)
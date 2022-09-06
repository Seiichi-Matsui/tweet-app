const express = require('express')
const router = express.Router()
const User = require("../model/user")
const jwt = require('jsonwebtoken')
const config = require('../config/dev')

router.post('/login', function(req, res) {
    const { email, password } = req.body

    if(!email) {
        return res.status(422).send({errors: [{title: 'User error', detail: "Eメールを入力してください"}]})
    }

    if(!password) {
        return res.status(422).send({errors: [{title: 'User error', detail: "パスワードを入力してください"}]})
    }

    User.findOne({email}, function(err, foundUser) {
        if(err) {
            return res.status(422).send({errors: [{title: 'User error', detail: "エラーが発生しました。もう一度お試しください。"}]})
        }
        
        if(!foundUser) {
            return res.status(422).send({errors: [{title: 'User error', detail: "入力したユーザーはいません"}]})
        }
        if(!foundUser.hasSamePassword(password)) {
            return res.status(422).send({errors: [{title: 'User error', detail: "パスワードが異なります"}]})
        }

        const username = foundUser.username

        const token = jwt.sign({
            userId: foundUser.id,
            username: foundUser.username
          }, config.SECRET, { expiresIn: '1h' });

        return res.json([username , token])
    })
})


router.post('/register', function(req, res) {
    const { username, email, password, confirmpassword} = req.body

    if(!username) {
        return res.status(422).send({errors: [{title: 'User error', detail: "ユーザー名を入力してください"}]})
    }

    if(!email) {
        return res.status(422).send({errors: [{title: 'User error', detail: "Eメールを入力してください"}]})
    }

    if(!password) {
        return res.status(422).send({errors: [{title: 'User error', detail: "パスワードを入力してください"}]})
    }

    if(password !== confirmpassword) {
        return res.status(422).send({errors: [{title: 'User error', detail: "パスワードが一致しません"}]})
    }

   User.findOne({email}, function(err, foundUser) {
    if(err) {
        return res.status(422).send({errors: [{title: 'User error', detail: "エラーが発生しました。もう一度お試しください。"}]})
    }
    
    if(foundUser) {
        return res.status(422).send({errors: [{title: 'User error', detail: "同じ名前のユーザーが既に存在します。別の名前にしてください。"}]})
    }

    const user = new User({username, email, password})
        user.save(function(err) {
            if(err) {
                return res.status(422).send({errors: [{title: 'User error', detail: "エラーが発生しました。もう一度お試しください。"}]})
            }
            return res.json({"registerd": true})
        })
    })
})

module.exports = router
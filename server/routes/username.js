const express = require('express')
const router = express.Router()
const UserName = require("../model/userName")

router.get('', function(req, res) {
    UserName.find({}, function(err, foundUserName) {
        return res.json(foundUserName)
    })
})

router.post('', function(req, res) {

    const userName = new UserName({ UserName })
        userName.save(function(err) {
            if(err) {
                return res.status(422).send({errors: [{title: 'User error', detail: "エラーが発生しました。もう一度お試しください。"}]})
            }
            return res.json({"registerd": true})
        })
    })
    


module.exports = router
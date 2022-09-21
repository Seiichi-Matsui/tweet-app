const express = require('express')
const router = express.Router()
const Coment = require("../model/coment")
const UserCtrl = require('../controllers/user')
const User = require('../model/user')


router.get('', function(req, res) {
    Coment.find({}, function(err, foundUser) {
        return res.json(foundUser)
    })
})

router.get('/:userId', function(req, res) {
    const userId = req.params.userId
    User.findById(userId, function(err, foundUser) {
        if(err) {
            return res.status(422).send({errors: [{title: 'User error', detail: 'User not found!'}]})
        }

        return res.json(foundUser)
    })
})


router.get('/:comentId', UserCtrl.authMiddleware, function(req, res) {
    const comentId = req.params.comentId
    Coment.findById(comentId, function(err, foundComents) {
        if(err) {
            return res.status(422).send({errors: [{title: 'Coment error', detail: 'Coment not found!'}]})
        }

        return res.json(foundComents)
    })
})


router.post('', function(req, res) {
const { userName, userComent, timeData } = req.body

const coment = new Coment({userName, userComent, timeData})
    coment.save(function(err) {
        if(err) {
            return res.status(422).send({errors: [{title: 'User error', detail: "エラーが発生しました。もう一度お試しください。"}]})
        }
        return res.json({"registerd": true})
    })
})

router.delete("/:comentId", async (req,res) => {
    try {
        await Coment.findByIdAndRemove(req.params.comentId);
    } catch(err) {
        res.status(500).send(err)
    }
    return res.json({"deleted": true})
})




module.exports = router
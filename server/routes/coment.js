const express = require('express')
const router = express.Router()
const Coment = require("../model/coment")

router.get('', function(req, res) {
    Coment.find({}, function(err, foundComents) {
        return res.json(foundComents)
    })
})


router.get('/:comentId', function(req, res) {
    const comentId = req.params.comentId
    Coment.findById(comentId, function(err, foundComents) {
        if(err) {
            return res.status(422).send({errors: [{title: 'Coment error', detail: 'Coment not found!'}]})
        }

        return res.json(foundComents)
    })
})

router.post('', function(req, res) {
    const { userName, userComent } = req.body

    if(!userName) {
        return res.status(422).send({errors: [{title: 'User error', detail: "ユーザー名を入力してください"}]})
    }

    if(!userComent) {
        return res.status(422).send({errors: [{title: 'User error', detail: "コメントを入力してください"}]})
    }


    const coment = new Coment({userName, userComent})
        coment.save(function(err) {
            if(err) {
                return res.status(422).send({errors: [{title: 'User error', detail: "エラーが発生しました。もう一度お試しください。"}]})
            }
            return res.json({"registerd": true})
        })
    })
    


module.exports = router
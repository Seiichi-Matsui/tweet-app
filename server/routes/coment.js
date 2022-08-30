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

module.exports = router
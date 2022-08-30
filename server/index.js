const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const FakeDb = require('./fake')
const  bodyParser  =  require ( 'body-parser' )

const comentRoutes = require('./routes/coment')
const userRoutes = require('./routes/user')

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) .then (
    () => {
        const fakeDb = new FakeDb()
        fakeDb.initDb()
    }
)

const app = express()
app.use(bodyParser.json())

app.use('/api/v1/coment', comentRoutes)
app.use('/api/v1/user', userRoutes)

app.get('/coment', function(req, res) {
    res.json({'success': true})
})

const PORT = process.env.PORT || '3001'

app.listen(PORT, function() {
    console.log('Running!');
})
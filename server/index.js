const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/')
const  bodyParser  =  require ( 'body-parser' )

const comentRoutes = require('./routes/coment')
const userRoutes = require('./routes/user')

const path = require('path')

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) .then (
    () => {
    })



const app = express()
app.use(bodyParser.json())

app.use('/api/v1/coment', comentRoutes)
app.use('/api/v1/user', userRoutes)

app.get('/coment', function(req, res) {
    res.json({'success': true})
})



app.get('/user', function(req, res) {
    res.json({'success': true})
})


if(process.env.NODE_ENV === 'production') {
    const appPath = path.join( __dirname, '..', 'dist', 'tweet-app')
        app.use(express.static(appPath))
        app.get('*', function(req, res) {
            res.sendFile(path.resolve(appPath, 'index.html'))

    })
} else {
}


const PORT = process.env.PORT || '3001'

app.listen(PORT, function() {
    console.log('I am running!');
})



    
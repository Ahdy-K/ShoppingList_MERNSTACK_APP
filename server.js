const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./routes/api/items')

const app = express()
// bodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/config').mongoURI 

mongoose.connect(db).then(()=> console.log('Connected to DB -_-')).catch(err => console.log(err))

app.use('/api/items', items)


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server started on port ${port}`))
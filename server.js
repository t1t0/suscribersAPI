require('dotenv').config()

const express = require('express')
//app created
const app = express()
//Port defined
const PORT = 3000

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('error', () => console.log('connected to database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

//App initiated
app.listen(PORT, () =>{
    console.log(`Server started at http://localhost:${PORT}`)
})
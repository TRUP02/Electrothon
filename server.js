require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error', (e) => console.error(e))
db.on('open', () => console.log("Connected to db"))

app.use(express.json())

const adminRouter = require('./routes/admin')
app.use('/admin', adminRouter)

app.listen(4000, () => {
    console.log("Server started at port 4000")
})
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import route from './routes/routes.js'

dotenv.config()

const app = express()
app.use(express.json())

const PORT = 8080

mongoose.connect(process.env.MongoDBUtrl)
    .then(() => console.log('Database is connected'))
    .catch((err) => console.log(err.message))

app.use('/api', route)


app.listen(PORT, () => console.log('Server is Running Port = ', PORT))


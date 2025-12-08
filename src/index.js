import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import chalk from 'chalk'
import routes from './routes/routes.js'
 
dotenv.config()

const app = express()
const PORT = 8080

app.use(express.json())

mongoose.connect(process.env.MongoDBUtrl)
  .then(() => console.log(chalk.green('✅ MongoDB Connected Successfully')))
  .catch((err) => console.log(chalk.red('❌ MongoDB Connection Failed: ' + err.message)))

app.use('/', routes)

app.listen(PORT, () => console.log(chalk.blue(`🚀 Server is running on port ${PORT}`)))
 
import express from "express"
import mongoose from "mongoose"
// import { PORT, dbURI } from "./config/environment.js"
import router from './config/router.js'
import 'dotenv/config'


const logger = (req, res, next) => {
  console.log(`🚨 - Incoming request on ${req.method} - ${req.url}`)
  next()
}


const startServer = async () => {
  
  const app = express()

  try {
    await mongoose.connect(process.env.dbURI)
    console.log('🚀 MongoDB Database has connected successfully')

    app.use(logger)
    app.use(express.json())
    app.use('/api', router)
  
    app.listen(process.env.PORT, () => console.log(`🚀 - Server listening on Port ${process.env.PORT}`))

  } catch (err) {
    console.log('🆘 Something has gone wrong starting the app!')
    console.log(err)
  }
}

startServer()


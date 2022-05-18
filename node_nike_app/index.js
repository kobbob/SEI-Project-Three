import express from "express"
import mongoose from "mongoose"
import { PORT, dbURI } from "./config/environment.js"
import router from './config/router.js'


const logger = (req, res, next) => {
  console.log(`🚨 - Incoming request on ${req.method} - ${req.url}`)
  next()
}

// * function to set up server
const startServer = async () => {
  
  const app = express()

  try {
    await mongoose.connect(dbURI)
    console.log('🚀 MongoDB Database has connected successfully')

    app.use(logger)
    app.use(express.json())
    app.use(router)
  
    app.listen(PORT, () => console.log(`🚀 - Server listening on Port ${PORT}`))

  } catch (err) {
    console.log('🆘 Something has gone wrong starting the app')
    console.log(err)
  }
}

startServer()


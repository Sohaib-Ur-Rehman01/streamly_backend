import dotenv from 'dotenv'

import connectDB from './db/index.js'
import { app } from './app.js'

dotenv.config({
  path: "./.env"
})

connectDB().then(
  () => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    })
  }
).catch((error) => {
  console.log("src/index.js m mongo db connection error h.", error);

})










/*
import express from 'express'
const app = express()
  (async () => {
    try {
      await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
      app.on("errorr", (error) => {
        console.log("DB connection error");
        throw error
      })
      app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      })
    } catch (error) {
      console.error("DB connection error", error);

    }
  })()
    */
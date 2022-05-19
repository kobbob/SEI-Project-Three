import mongoose from 'mongoose'
import mongooseUniqueValidator from "mongoose-unique-validator" 

const collabSchema = new mongoose.Schema({
  collaboration: { type: String, required: true },
  status: { type: String, required: true },
  year: { type: String, required: true },
  description: { type: String, required: true, maxLength: 700 },
  image1: { type: String, required: true },
  url: { type: String },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
})

collabSchema.plugin(mongooseUniqueValidator)

export default mongoose.model("Collab", collabSchema)

// categories = stretch goal
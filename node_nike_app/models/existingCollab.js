import mongoose from 'mongoose'

const ecSchema = new mongoose.Schema({
  collaboration: { type: String, required: true },
  year: { type: String, required: true },
  description: { type: String, required: true, maxLength: 700 },
  image1: { type: String, required: true },
  image2: { type: String },
  image3: { type: String },
  url: { type: String }
  // owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  // timestamps: true
})

export default mongoose.model("Existing", ecSchema)

// categories = stretch goal
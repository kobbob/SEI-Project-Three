import mongoose from 'mongoose'
import Existing from '../models/existingCollab.js'
import { dbURI } from '../config/environment.js'
import existingCollabData from './data/existingCollab.js'


// This function is going to be executed once and will either add data or fail and close the connection
const seedDatabase = async () => {
  try {

    // Connect to the database
    await mongoose.connect(dbURI)
    console.log('🚀 Database connected')

    // Remove all the data from the database
    await mongoose.connection.db.dropDatabase()
    console.log('👍 Database dropped')

    // Add seed data back in
    const collabsAdded = await Existing.create(existingCollabData)
    console.log(`🌱 Database seeded with ${collabsAdded.length} existing Nike collaborations`)

    // Close the connection to the database
    await mongoose.connection.close()
    console.log('👋 Bye')
    
  } catch (err) {
    console.log('🆘 Something went wrong')
    console.log(err)

    // Close the connection to the database
    await mongoose.connection.close()
    console.log('🚨 Connection closed due to failure')
  }
}

// Execute our seed function
seedDatabase()
import mongoose from 'mongoose'
import Collab from '../models/collaborations.js'
import User from '../models/users.js'
import collabData from './data/collaborations.js'
import userData from './data/users.js'
import 'dotenv/config'


// This function is going to be executed once and will either add data or fail and close the connection
const seedDatabase = async () => {
  try {

    // Connect to the database
    await mongoose.connect(process.env.dbURI)
    console.log('🚀 Database connected')

    // Remove all the data from the database
    await mongoose.connection.db.dropDatabase()
    console.log('👍 Database dropped')

    //Add users 
    const usersAdded = await User.create(userData)
    console.log('usersAdded ->', usersAdded)

    //Adding a user field to each of the objects in the collabData array
    const collabsWithOwners = collabData.map(collab => {
      return { ...collab, owner: usersAdded[0]._id }
    })

    // Add seed data back in
    const collabsAdded = await Collab.create(collabsWithOwners)
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
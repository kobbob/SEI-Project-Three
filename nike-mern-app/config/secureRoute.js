import jwt from 'jsonwebtoken' // provides verify method. 
import User from '../models/users.js'
import 'dotenv/config'

// exporting this function. 
// it's quite similar to a controller. 
export const secureRoute = async (req, res, next) => {
  console.log('🚨 HIT THE SECURE ROUTE***')
  try {
    // req.headers contains all headers attached to the request
    // 1. Check to see an Authorization header exists, if it doesn't throw an error
    console.log('HEADERS ->', req.headers)
    if (!req.headers.authorization) throw new Error('Missing header')
    // 2. Remove Bearer from the beginning of the token, this will allow us to decode it using method provided by jwt. 
    const token = req.headers.authorization.replace('Bearer ', '')
    console.log('token ->', token)
    // 3. Verify the token using a method provided by jwt
    // first arg is the token
    // second is the secret 
    const payload = jwt.verify(token, process.env.SECRET)
    console.log('payload ->', payload)
    // At this point we have all the information we need to verify a user. The token is valid, but we need to ensure the user actually exists. 
    // Using the id from the payload.sub, we are going to verify that the user still exists by running the findById method
    const userToVerify = await User.findById(payload.sub)
    console.log('userToVerify', userToVerify)
    // If it returns a user, we've successfully verified them
    // If it doesn't return a user, then despite the token being valid, the user is no longer valid so we will reject the request
    if (!userToVerify) throw new Error('User not found')

    //(day3) update the req object that is going to be passed to the controller, and add the userToVerify
    // add the user to the object 
    req.verifiedUser = userToVerify

    console.log('req after verifiedUser ->', req)

    // At this point, the token and user is valid, so we will pass through the request onto the controller
    next()

  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: 'Unauthorised' })
  }

} 

// we can add this function now onto any route that we want by simply adding secureRoute
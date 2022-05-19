import User from '../models/users.js'
import jwt from 'jsonwebtoken' // jwt is going to provide methods to create a token
import 'dotenv/config'

// METHOD: POST 
// Endpoint: /register
// Description: req.body that contains username, email, password and pC and submit it to our model for validation
export const registerUser = async (req, res) => {
  try {
    console.log(req.body)
    //Submit our req.body to our model
    const newUser = await User.create(req.body)
    console.log('newUser -->', newUser)
    return res.status(202).json({ message: `Registration Successful for ${newUser.username}` })
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}


// METHOD: POST
// Endpoint: /login
// Description: Log in user by checking password matches email
export const loginUser = async (req, res) => {
  try {
    console.log('user details -->', req.body)
    const { email, password } = req.body
    //First, we need to check to see if a user exists with the same email passsed in the login request
    const userToLogin = await User.findOne({ email: email })
    console.log('userToLogin -->', userToLogin)

    // Second, we want to make sure the plain text password on req.body.password matches the hashed password on the returned document
    // this is linked to the bcrypt compareSync model
    if(!userToLogin || !userToLogin.validatePassword(password)){
      throw new Error()
    }

    // Generating a token to be sent to the user that contains all the relevant info to validate them
    // _id checks to see if they exist in our DB and validate them. 
    // First argument is our payload, this will be an object and contain a sub that will identify the user
    // Second argument is the secret that makes our token secure, you'd need a secret to decode it, or generate a valid and acceptable token
    // third argument is our options - this is where we're going to set our expiry date. 
    const token = jwt.sign({ sub: userToLogin._id }, process.env.SECRET, { expiresIn: '5h' })
    console.log('TOKEN ->', token)

    return res.status(200).json({ message: `Welcome back ${userToLogin.username}`, token: token })
  } catch (err) {
    console.log(err)
    return res.status(422).json({ message: 'Unauthorised' })
  }
}

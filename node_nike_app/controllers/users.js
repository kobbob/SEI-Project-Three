import User from '../models/users.js'

//METHOD: GET
//Endpoint: /profile
//Description: Return current user's profile info. with added fields createdNikes
export const getProfile = async (req, res) => {
  try {
    //Retrieve profile info. 
    const profile = await User.findById(req.verifiedUser._id).populate('createdCollab')
    if (!profile) throw new Error('User Not Nound')
    return res.status(200).json(profile)
  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: 'Unauthorised' })
  }
}
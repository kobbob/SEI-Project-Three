import Collab from '../models/collaborations.js'
import User from "../models/users.js"

//METHOD: GET
//Endpoint: /nike-collab
//Description: return all existing collabs
export const showCollabs = async (req, res, next) => {
  const allCollabs = await Collab.find()
  console.log({ allCollabs })
  return res.status(200).json(allCollabs)
}

//METHOD: POST
// Endpoint: /nike-collab
// Description: POST request that adds a new nike shoe collab to the db
export const addCollab = async (req, res) => {
  const { body: newCollab, verifiedUser } = req
  console.log('verifiedUser ->', verifiedUser)
  try {
    console.log('req.body', newCollab)
    const addedCollab = await Collab.create({ ...newCollab, owner: verifiedUser._id })

    return res.status(200).json(addedCollab)
  } catch (err) {
    console.log("Can't add this Collaboration!")
    console.log(err)
    return res.status(400).json(err.collaboration)
  }
}

// METHOD: GET
// Endpoint: /nike-collab/:id
// Description: Get single nike collab and return
export const getSingleCollab = async (req, res) => {
  const { id } = req.params
  try {
    const selectedCollab = await Collab.findById(id).populate('owner')
    if (!selectedCollab) {
      return res.status(404).json({ message: "Collaboration not found" })
    }
    return res.status(200).json(selectedCollab)
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "Something went wrong." })
  }
}

// METHOD: PUT
// Endpoint: /nike-collab/:id
// Description: Update nike collab and return new doc
export const updateCollab = async (req, res) => {
  const { id } = req.params
  const { body: editCollab, verifiedUser } = req
  try {
    const updatedCollab = await Collab.findByIdAndUpdate(id, editCollab, { new: true })
    console.log(updatedCollab)

    // check user making request is owner of collab document
    if (!updatedCollab.owner.equals(verifiedUser._id)) throw new Error('Unauthorised')

    console.log('owners match')

    // update document (if owners match)
    Object.assign(updatedCollab, editCollab)

    //Save the document
    await updatedCollab.save()

    if (!updatedCollab){
      return res.status(404).json({
        message: 'Collaboration not found'
      })
    }
    return res.status(200).json(updatedCollab)
  } catch (err) {
    console.log('ERRRR ==>', err)
    return res.status(404).json(err)
  }
}

// METHOD: DELETE
// Endpoint: /nike-collab/:id
// Description: Delete specified nike collaborations
export const deleteCollab = async (req, res) => {
  const { id } = req.params
  try {
    // We can't send a body back due to the status code, so no need to save the response to a variable
    const collabToDelete = await Collab.findById(id)
    console.log('document owner', collabToDelete.owner)
    console.log('verified user', req.verifiedUser._id)
    if (!collabToDelete.owner.equals(req.verifiedUser._id)){
      console.log('🆘 - Failed at owner check')
      throw new Error('Unauthorised')
    }
    //
    await collabToDelete.remove()
    // 204 status doesn't accept a body in the response, so sendStatus ends the request as 
    //well as allowing us to still define the status
    return res.sendStatus(204)
  } catch (err) {
    return res.status(404).json(err)
  }
}
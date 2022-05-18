import Existing from '../models/existingCollab.js'

//METHOD: GET
//Endpoint: /
//Description: return all existing collabs
export const showExistingCollabs = async (req, res, next) => {
  const existingCollabs = await Existing.find()
  console.log({ existingCollabs })
  return res.status(200).json(existingCollabs)
}
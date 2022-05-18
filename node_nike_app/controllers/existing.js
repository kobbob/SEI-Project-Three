// import Existing from '../models/existing.js'

// //METHOD: GET
// //Endpoint: /existing
// //Description: return all existing collabs
// export const getExistingCollabs = async (req, res) => {
//   const ecCollabs = await Existing.find()
//   console.log({ ecCollabs })
//   try {
//     return res.status(200).json(ecCollabs)
//   } catch (err) {
//     console.log(err)
//     return res.status(500).json({ message: "Something went wrong." })
//   }
// }
import express from 'express'

// Imported controllers
import { showCollabs, addCollab, getSingleCollab, updateCollab, deleteCollab } from '../controllers/collaborations.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { getProfile } from '../controllers/users.js'
import { secureRoute } from './secureRoute.js'

// Router
const router = express.Router()

// Routes
// Generic
router.route('/nike-collab')
  .get(showCollabs)
  .post(secureRoute, addCollab) 

// Individual
router.route('/nike-collab/:id')
  .get(getSingleCollab) 
  .put(secureRoute, updateCollab) 
  .delete(secureRoute, deleteCollab)


// Authentication
router.route('/register')
  .post(registerUser)

router.route('/login')
.post(loginUser)

// Users
router.route('/profile')
  .get(secureRoute, getProfile)

// Router is exported and will be passed into generic middleware
export default router


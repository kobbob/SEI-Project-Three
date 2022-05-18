import express from 'express'

// Imported controllers
import { showExistingCollabs } from '../controllers/existingCollab.js'

// Router
const router = express.Router()

// Routes
// Generic
router.route('/nike-collab')
  .get(showExistingCollabs)

// Router is exported and will be passed into generic middleware
export default router


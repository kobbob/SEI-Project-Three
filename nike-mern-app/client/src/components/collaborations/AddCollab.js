// access via Menu OR from ExistingIndex via dialogue window (from SignUp)
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// Import bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

// Import helpers
import { getTokenFromLocalStorage } from '../../helpers/auth'

const AddCollab = () => {

  // Navigate
  const navigate = useNavigate()

  // ? State
  // Form data passed by user
  const [ formData, setFormData ] = useState({
    collaboration: '',
    // status: '',
    year: '',
    description: '',
    // image1: '',
  })

  // State that tracks errors on specific fields
  const [ errors, setErrors ] = useState({})

  // ? Update formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Third argument of post request is config object
      // To add our token auth, we add a headers object inside the config object with an Authorization key
      // Authorization key has a Bearer token as a value, just as in insomnia
      const { data } = await axios.post('api/nike-collab', formData, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      navigate('/collaborations')
    } catch (err) {
      console.log(err)
      console.log(err.response.data.errors)
      setErrors(err.response.data.errors)
    }
  }

  return (
    <section className="form-page">
      <Container>
        <Row>
          <form className='col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-4' onSubmit={handleSubmit}>
            <h1>Add Collaboration</h1>
            {/* Collaboration Name */}
            <label htmlFor="collaboration">Collaboration</label>
            <input type="text" name="collaboration" className='input' placeholder='Collaboration Name' value={formData.collaboration} onChange={handleChange} />
            {errors.collaboration && <p className='text-danger'>{errors.collaboration}</p>}

            {/* Status
            <label htmlFor="status">Is this existing or proposed?</label>
            <select className="form-control" id="dropdownStatus">
              <option>--Choose an option below--</option>
              <option>Existing Collaboration</option>
              <option>Proposed Collaboration</option>
            </select> */}

            {/* Year of Collab */}
            <label htmlFor="year">Year</label>
            <input type="text" name="year" className='input' placeholder='Year' value={formData.year} onChange={handleChange} />
            {errors.year && <p className='text-danger'>{errors.year}</p>}

            {/* Description */}
            <label htmlFor="description">Description</label>
            <textarea name="description" className='input' placeholder='Description' value={formData.description} onChange={handleChange}></textarea>
            {errors.description && <p className='text-danger'>{errors.description}</p>}

            {/* Image
            <label htmlFor="image1">Upload your Image</label>
            <input type="file" className='form-control-file' value={formData.image1} onChange={handleChange} />
            {errors.image1 && <p className='text-danger'>{errors.image1}</p>} */}

            {/* Submit */}
            <button type="submit" className="btn btn-warning w-100">Add</button>
          </form>
        </Row>
      </Container>
    </section>
  )
}

export default AddCollab
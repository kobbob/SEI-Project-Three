// route from Menu -> SignInLanding -> link to this page
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// Import bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const SignUp = () => {

  // Navigate
  const navigate = useNavigate()

  // ? State
  // Form data passed by user
  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  // State that tracks errors on specific fields
  const [ errors, setErrors ] = useState({})

  // ? Update formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  // ? Submit information from fields to our /register endpoint
  const handleSubmit = async (event) => {
    // Prevent page reload
    event.preventDefault()
    try {
      // Make our post request to the /register endpoint
      // Post requests take at least 2 arguments
      // First argument is still just the url endpoint
      // Second is our request body - this body is the formData state
      await axios.post('api/register', formData)
      // navigate to the login page on success
      navigate('/collaborations')
    } catch (err) {
      console.log(err) // Full error object
      console.log(err.response) // This is the response from the API including status etc
      console.log(err.response.data.errors) // This is the errors object on the data key
      setErrors(err.response.data.errors)
    }
  }

  return (
    <section className="form-page">
      <Container>
        <Row>
          <form className='col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-4' onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            {/* Username */}
            <label htmlFor="username">Username</label>
            <input type="text" name="username" className='input' placeholder='Username' value={formData.username} onChange={handleChange} />
            {errors.username && <p className='text-danger'>{errors.username}</p>}
            {/* Email */}
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className='input' placeholder='Email' value={formData.email} onChange={handleChange} />
            {errors.email && <p className='text-danger'>{errors.email}</p>}
            {/* Password */}
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className='input' placeholder='Password' value={formData.password} onChange={handleChange} />
            {errors.password && <p className='text-danger'>{errors.password}</p>}
            {/* Password Confirmation */}
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <input type="password" name="passwordConfirmation" className='input' placeholder='Password Confirmation' value={formData.passwordConfirmation} onChange={handleChange} />
            {errors.passwordConfirmation && <p className='text-danger'>{errors.passwordConfirmation}</p>}
            {/* Submit */}
            <button type="submit" className="btn btn-warning w-100">Submit</button>
          </form>
        </Row>
      </Container>
    </section>
  )

}

export default SignUp
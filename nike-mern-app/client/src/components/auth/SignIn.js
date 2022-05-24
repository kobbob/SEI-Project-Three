// route from Menu -> SignIn (successful)
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

// import Stamp from '../../images/stamp.jpeg'


const SignIn = () => {

  // Navigate
  const navigate = useNavigate()

  // ? State
  // Form data passed by user
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState(false)

  // ? Save to local storage
  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('nike-mern-app', token)
  }

  // ? Submit request
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('api/login', formData)
      setTokenToLocalStorage(data.token)
      navigate('/collaborations')
    } catch (err) {
      console.log(err)
      setErrors(true)
    }
  }

  // ? Handle change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors(false)
  }


  return (
    <section className="form-wrapper">
      <section className="form-page">
        {/* <div className='sticker-form'>
          <img src={Stamp} alt='nike-sneaker-stamp' className='stamp' />
        </div> */}
        <Container>
          <Row>
            <form className='col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-2' onSubmit={handleSubmit}>
              <h1>Sign In</h1>
              {/* Email */}
              <label htmlFor="email">Email</label>
              <input type="email" name="email" className='input' placeholder='Email' required value={formData.email} onChange={handleChange} />
              {/* Password */}
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className='input' placeholder='Password' required value={formData.password} onChange={handleChange} />
              {errors && <p className='text-danger text-center'>Unauthorised</p>}
              {/* Submit */}
              <button type="submit" className="btn btn-warning w-100">Submit</button>
            </form>
          </Row>
        </Container>
      </section>
    </section>
  )
}

export default SignIn
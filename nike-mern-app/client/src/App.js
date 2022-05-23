import { useEffect, useState } from 'react'
import axios from 'axios'

// Import react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Components
import Loading from './components/Loading'
import Navigation from './components/common/Navigation'
import Menu from './components/Menu'
import About from './components/About'
import CollabHome from './components/collaborations/CollabHome'


// Import Auth Components
import SignInLanding from './components/auth/SignInLanding'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'



const App = () => {

  // Loading Page
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])


  //Connect to Express API (NodeJS)
  console.log(process.env.REACT_APP_TOKEN)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/nike-collab/')
      console.log(data)
    }
    getData()
  })


  return (
    <main className='site-wrapper'>
      {loading === false ? (
        <BrowserRouter>
          {/* <Navbar /> */}
          <Navigation />
          <Routes>
            <Route path='/collaborations' element={<CollabHome />} />

            <Route path='/menu' element={<Menu />} />
            <Route path='/about' element={<About />} />

            <Route path='/signinlanding' element={<SignInLanding />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />

            {/* <Route path='*' element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
      ) : (
        <Loading />
      )}
    </main>
  )
}

export default App

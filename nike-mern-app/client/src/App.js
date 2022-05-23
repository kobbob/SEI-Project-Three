import { useEffect } from 'react'
import axios from 'axios'

// Import react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Components
// import Loading from './components/Loading'
import Navigation from './components/common/Navigation'
import CollabHome from './components/collaborations/CollabHome'
import Loading from './components/Loading'
import Menu from './components/Menu'
import About from './components/About'
import SignInLanding from './components/auth/SignInLanding'


// Import Auth Components

const App = () => {

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
      <BrowserRouter>

        {/* <Navbar /> */}
        <Navigation />
        <Routes>
          <Route path='/' element={<Loading />} />  
          <Route path='/collaborations' element={<CollabHome />} />

          <Route path='/menu' element={<Menu />} />  
          <Route path='/about' element={<About />} />  
          <Route path='/signinlanding' element={<SignInLanding />} />  

          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App

import { useEffect } from 'react'
import axios from 'axios'

// Import react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Components
import Home from './components/Home'
import CollabIndex from './components/collaborations/CollabIndex'

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
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/*    "/loading" element={<Loading />} */}
          
          <Route path="/" element={<Home />} />

          {/* Auth routes */}

          {/* Collab routes */}
          <Route path="/collaborations" element={<CollabIndex />} />

          {/* Route for a specific collab */}

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

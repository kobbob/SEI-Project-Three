import { useEffect } from 'react'
import axios from 'axios'

// Import react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Components
import Welcome from './components/Welcome'
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
        <Navbar />
        <Routes>
          <Welcome />
          <CollabIndex />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

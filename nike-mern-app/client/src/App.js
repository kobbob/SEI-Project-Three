import { useEffect } from 'react'
import axios from 'axios'

const App = () => {

  console.log(process.env.REACT_APP_TOKEN)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/nike-collab/') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })

  return <h1>Hello World</h1>
}

export default App

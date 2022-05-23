
// filter method: existing & future

// {/* <h1>HOME - trigger welcome modal after loading page</h1>
// <!-- Trigger/Open Welcome Modal after the loading page --> */}
// {/* <!-- Trigger/Open CollabSHOW Modal after onClick --> */}
import { useState, useEffect } from 'react'
import axios from 'axios'

import sticker from '../../images/sticker.webp'


const CollabHome = () => {

  const [collabs, setCollabs] = useState([])
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getCollabs = async () => {
      try {
        const { data } = await axios.get('/api/nike-collab/')
        setCollabs(data)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
      setLoading(false)
    }
    getCollabs()
  }, [])



  return (
    <main className='collab-wrapper'>
      <div className='sticker-frame'>
        <img src={sticker} alt='nike-sneakerhead-sticker' className='sticker' />
      </div>
      <h1>Collaborations</h1>
      {loading ?
        <p>Loading...</p>
        :
        errors ?
          <p>Collaborations could not load. Please try again later!</p>
          :
          <div className='collab-container'>
            {collabs.map(collab => {
              const { _id, image1, collaboration, year } = collab
              console.log(collab)
              return (
                <div className='card-image' key={_id}>
                  <img src={image1} alt={`${collaboration} - ${year}`} />
                </div>
              )
            })}
          </div>
      }
    </main>
  )
}

export default CollabHome
import { useState, useEffect } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'

// import { userIsOwner, getTokenFromLocalStorage } from '../../helpers/auth'

// // Import spinner
// import Spinner from '../utilities/Spinner'


const PopUp = ({ setPopUp, id }) => {

  // // Navigate
  // const navigate = useNavigate()


  const [collab, setCollab] = useState(false)
  const [errors, setErrors] = useState(false)


  // accessing Express API to get all collaborations
  useEffect(() => {
    const getSingleCollab = async () => {
      try {
        const { data } = await axios.get(`/api/nike-collab/${id}`)
        setCollab(data)
        console.log('collab', data)
      } catch (err) {
        console.log(err)
        // setErrors(true)
      }
    }
    getSingleCollab()
  }, [id])


  // // ? This function will execute a delete request
  // const deleteCollab = async () => {
  //   try {
  //     // Sending delete request
  //     await axios.delete(`/api/nike-collab/${_id}`, {
  //       headers: {
  //         Authorization: `Bearer ${getTokenFromLocalStorage()}`,
  //       },
  //     })
  //     // If successful navigate away from the single page back to cheeses
  //     // When cheeses loads, it makes a fresh api call getting new data, without this cheese in it
  //     navigate('/collaborations')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }



  return (
    <main className='wrapper'>
      { collab &&
        <div className="PopUp-Wrapper">
          {/* x close window */}
          <button className="popup-x" onClick={() => setPopUp(false)} >X</button>
          <div className="pu-content-container">
            <div className="column">
              <div className="image-column">
                <img className="pu-img" src={collab.image1} alt={`${collab.collaboration}`} />
              </div>
            </div>
            <div className="column">
              <div className="text-column">
                <div className="pu-title">{collab.collaboration}</div>
                <div className="pu-year">Year: {collab.year}</div>
                <div className="pu-status">Status: {collab.status}</div>
                <div className="pu-owner">Entry Added By: {collab.owner.username}</div>
                <div className="pu-description">Description: {collab.description}</div>
              </div>
            </div>
          </div>
  
          {/* button controls */}
          <div className="pu-button-container">
            <button onClick={() => setPopUp(false)}> Edit Entry </button>
            <button onClick={() => setPopUp(false)}> Delete Entry </button>
          </div>
        </div>
      } 
    </main>
  )

}

export default PopUp


import { useState, useEffect } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'

// import { userIsOwner, getTokenFromLocalStorage } from '../../helpers/auth'

// // Import spinner
// import Spinner from '../utilities/Spinner'


const PopUp = props => {

  // // Navigate
  // const navigate = useNavigate()

  const { setPopUp } = props

  const { _id } = useParams()

  const [collab, setCollab] = useState([])
  const [errors, setErrors] = useState(false)


  // accessing Express API to get all collaborations
  useEffect(() => {
    const getSingleCollab = async () => {
      try {
        const { data } = await axios.get(`/api/nike-collab/${_id}`)
        setCollab(data)
        console.log(data)
      } catch (err) {
        console.log(err)
        // setErrors(true)
      }
    }
    getSingleCollab()
  }, [_id])


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
              <h2 className="pu-title">{collab.collaboration}</h2>
              <h3 className="pu-status">Status: {collab.status}</h3>
              <h4 className="pu-year">Year: {collab.year}</h4>
              <h4 className="pu-description">Description: {collab.description}</h4>
            </div>
          </div>
        </div>

        {/* button controls */}
        <div className="pu-button-container">
          <button onClick={() => setPopUp(false)}> Edit Entry </button>
          <button onClick={() => setPopUp(false)}> Delete Entry </button>
        </div>
      </div>
    </main>
  )

}

export default PopUp


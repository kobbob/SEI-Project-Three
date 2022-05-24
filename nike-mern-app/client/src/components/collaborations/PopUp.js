import Giphy from '../../images/giphy.gif'

// import { useState, useEffect } from 'react'
// import axios from 'axios'

// import { useParams, useNavigate } from 'react-router-dom'

// import { userIsOwner, getTokenFromLocalStorage } from '../../helpers/auth'

// // Import spinner
// import Spinner from '../utilities/Spinner'


const PopUp = props => {

  // // Navigate
  // const navigate = useNavigate()

  const { setPopUp } = props

  // const { _id } = useParams()

  // const [collab, setCollab] = useState([])
  // const [errors, setErrors] = useState(false)


  // // accessing Express API to get all collaborations
  // useEffect(() => {
  //   const getCollabs = async () => {
  //     try {
  //       const { data } = await axios.get(`/api/nike-collab/${_id}`)
  //       setCollab(data)
  //     } catch (err) {
  //       console.log(err)
  //       setErrors(true)
  //     }
  //   }
  //   getCollabs()
  // }, [_id])


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


  // return (
  //   <div className="PopUp">
  //     {/* {collab ?
  //       <> */}
  //         {/* x close window */}
  //         <button className="popup-x" onClick={() => setPopUp(false)} >X</button>

  //         <div className="pu-content-container">
  //           {/* <h1>{collab.collaboration}</h1>
  //           <hr /> */}
  //           <div className='pu-img'>
  //             <img src={image1} alt={'image'} />
  //           </div>
  //           {/* <h2>{collab.year}</h2>
  //           <hr />
  //           <h2>{collab.user.username}</h2>
  //           <hr /> */}
  //         </div>

  //         {/* button controls */}
  //         {/* {userIsOwner(collab) && */}
  //           <div className="pu-button-container">
  //             <button onClick={() => setPopUp(false)}> Delete Entry </button>
  //             {/* <button onClick={deleteCollab}> Delete Entry </button> */}
  //             <button onClick={() => setPopUp(false)}> Edit Entry </button>
  //           </div>
  //         }
  //       {/* </>
  //       :
  //       <h2 className='text-center'>
  //         {errors ? 'Something went wrong! Please try again later!' : <Spinner />}
  //       </h2> */}
  //     }
  //   </div>
  // )


  return (
    <div className="PopUp-Wrapper">
      {/* x close window */}
      <button className="popup-x" onClick={() => setPopUp(false)} >X</button>
      <div className="pu-content-container">
        <img className="pu-img" src={Giphy} alt="bone" />
        <h1>Add more bones?</h1>
      </div>
      {/* button controls */}
      <div className="pu-button-container">
        <button onClick={() => setPopUp(false)}> Edit Entry </button>
        <button onClick={() => setPopUp(false)}> Delete Entry </button>
      </div>
    </div>
  )

}

export default PopUp


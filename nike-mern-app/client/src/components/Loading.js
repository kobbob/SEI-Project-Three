
import giphy from '../images/giphy.gif'


const Loading = () => {
  return (
    <>
      <div className='loading-page'>
        <img src={giphy} alt='nike-running-app-gif' className='loading-gif' />
        <h6>Loading . .</h6>
      </div>
    </>
  )
}

export default Loading
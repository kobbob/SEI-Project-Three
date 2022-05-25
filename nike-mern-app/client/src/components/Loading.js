
import { Link } from 'react-router-dom'
import giphy from '../images/giphy.gif'


const Loading = () => {
  
  return (
    <>
      <div className='loading-page'>
        <img src={giphy} alt='nike-running-app-gif' className='loading-gif' />
        <h2>Loading . .</h2>
        <Link to='/collaborations'>Enter</Link>
      </div>
    </>
  )
}

export default Loading
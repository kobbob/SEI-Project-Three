
import { Link } from 'react-router-dom'
import giphy from '../images/giphy.gif'


const Loading = () => {
  
  return (
    <>
      <div className='loading-page'>
        <img src={giphy} alt='nike-running-app-gif' className='loading-gif' />
        <h2>Welcome!</h2>
        <h4><Link to='/collaborations'>Click Here to Enter</Link></h4>
      </div>
    </>
  )
}

export default Loading
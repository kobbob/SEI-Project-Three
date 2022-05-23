
import giphy from '../images/giphy.gif'

const Loading = () => {
  return (
    <>
      <div className='loading-page'>
        <img src={giphy} alt='nike-running-app-gif' className='loading-gif' />
        <h1>Loading . . . </h1>
      </div>
    </>
  )
}

export default Loading
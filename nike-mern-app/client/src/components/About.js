import moodboard from '../images/moodboard.png'

const About = () => {
  return (
    <section className='about-wrapper'>
      <h1>About Page</h1>
      <p> Things I didn&apos;t manage to achieve:
        <ul>
          <li>Animated cursor;</li>
        </ul>
      </p>
      <h2>Initial Moodboard</h2>
      <div className='moodboard'>
        <img src={moodboard} alt='moodboard'/>
      </div>
    </section>
  )
}

export default About

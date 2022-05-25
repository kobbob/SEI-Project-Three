import moodboard from '../images/moodboard.png'

const About = () => {
  return (
    <section className='about-wrapper'>
      <h1>About Page</h1>
      <p> Things I didn&apos;t manage to achieve so far:
        <ul>
          <li>Front-end:</li>
          <li>Better Welcome Page;</li>
          <li>Offset/Staggered Grid;</li>
          <li>Responsive Design;</li>
          <li>Filtering collaborations - existing to future;</li>
          <li>Cloudinary - uploading images + form;</li>
          <li>Animated cursor;</li>
          <li>Navigate between pop-up single collabs.</li>
          <li>Add, Edit, Delete Collab -- Add in cloudinary functions</li>
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

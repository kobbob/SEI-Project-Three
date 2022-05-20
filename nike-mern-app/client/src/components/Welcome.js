import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <>
      <h1>Welcome</h1>
      <Link to="/collabs">Collaborations</Link>
    </>
  )
}

export default Welcome
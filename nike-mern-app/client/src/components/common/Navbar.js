import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/collabs">Collaborations</Link>
      </nav>
    </header>
  )
}

export default Navbar
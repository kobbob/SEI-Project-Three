//import ABOUT / SIGN IN / COLLAB  --> AUTH: ADD A COLLAB / YOUR WORLD / LOGOUT


import { Link } from 'react-router-dom'

// Import React Components
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


const Navigation = () => {


  return (

    <Navbar bg="dark" variant="dark">
      <Container>
        {/* Navbar brand */}
        {/* Wherever you use a href on a bootstrap component, replace it with an as={Link} and a to="/" */}
        <Navbar.Brand id="logo" as={Link} to="/collaborations">Nike x Collab</Navbar.Brand>
        {/* Navbar Toggle is our mobile burger icon - this is displayed at a breakpoint specified on the Navbar component above */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Navbar collapse is our menu wrapped in a collapsible container for mobile */}
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          {/* Nav Link is an individual link inside a nav. Same as Nav Brand, to spcifiy react navigation use "as" and "to" */}
          <Nav.Link as={Link} to="/collaborations">Collaborations</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}

export default Navigation
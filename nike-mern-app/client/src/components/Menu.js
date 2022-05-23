//need page for non-auth & also auth. 
// non-auth links: ABOUT / SIGN IN / COLLABORATIONS
// auth links: ABOUT / COLLABORATIONS / ADD A COLLABORATION / YOUR WORLD / LOG OUT

import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <h1>Menu Page</h1>
      <Link to='/collaborations'>Change this to automatic entry transition</Link>
      <p>About</p>
    </>
  )
}

export default Menu
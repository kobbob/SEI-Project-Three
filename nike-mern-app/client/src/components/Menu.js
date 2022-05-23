//need page for non-auth & also auth. 
// non-auth links: ABOUT / SIGN IN / COLLABORATIONS
// auth links: ABOUT / COLLABORATIONS / ADD A COLLABORATION / YOUR WORLD / LOG OUT

import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <section className="menu-wrapper">
      <h1>Menu Page</h1>
      <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/collaborations'>Collaborations</Link></li>
        <li><Link to='/signinlanding'>Sign In</Link></li>
      </ul>
    </section>
  )
}

export default Menu

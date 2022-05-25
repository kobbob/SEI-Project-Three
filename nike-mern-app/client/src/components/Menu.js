//need page for non-auth & also auth. 
// non-auth links: ABOUT / SIGN IN / COLLABORATIONS
// auth links: ABOUT / COLLABORATIONS / ADD A COLLABORATION / YOUR WORLD / LOG OUT

import { Link, useNavigate } from 'react-router-dom'

import { userIsAuthenticated } from '../helpers/auth'

import sneakerhead from '../images/sneakerhead.png'

const Menu = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    window.localStorage.removeItem('nike-mern-app')
    navigate('/collaborations')
  }

  return (
    <section className="menu-wrapper">
      <div className='sticker-frame'>
        <img src={sneakerhead} alt='nike-sneakerhead-shoe' className='sneakerhead' />
      </div>
      <ul className='menu-list'>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/collaborations'>Collaborations</Link></li>
        {userIsAuthenticated() ?
          <>
            <li><Link to="/add">Add Collaboration</Link></li>
            <li><Link to='/collaborations' onClick={handleLogout}>Sign Out</Link></li>
          </>
          :
          <>
            <li><Link to="/signin">Sign In</Link></li>
          </>
        }
      </ul>
      <div className='marquee'>
        <div className='marquee__content'>
          <div className='marquee-text'>GET YOUR KICKS ON GET YOUR KICKS ON GET YOUR KICKS ON GET YOUR KICKS ON GET YOUR KICKS ON GET YOUR KICKS ON GET YOUR KICKS ON</div>
        </div>
      </div>
    </section>
  )
}

export default Menu

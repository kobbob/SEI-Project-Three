//need page for non-auth & also auth. 
// non-auth links: ABOUT / SIGN IN / COLLABORATIONS
// auth links: ABOUT / COLLABORATIONS / ADD A COLLABORATION / YOUR WORLD / LOG OUT

import { Link, useNavigate } from 'react-router-dom'

import { userIsAuthenticated } from '../helpers/auth'


const Menu = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    window.localStorage.removeItem('nike-mern-app')
    navigate('/collaborations')
  }

  return (
    <main>
      <section className="menu-wrapper">
        <div className="menu-item">
          <a className="menu__item-link">About</a>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>About</span>
              <span>About</span>
              <span>About</span>
              <span>About</span>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <a className="menu__item-link">Collaborations</a>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>Collaborations</span>
              <span>Collaborations</span>
              <span>Collaborations</span>
              <span>Collaborations</span>
            </div>
          </div>
        </div>
        {userIsAuthenticated() ?
          <>
            <li><Link to="/add">Add Collaboration</Link></li>
            <li><Link to='/collaborations' onClick={handleLogout}>Sign Out</Link></li>
          </>
          :
          <>
            <div className="menu-item">
              <a className="menu__item-link">Sign In</a>
              <div className="marquee">
                <div className="marquee__inner" aria-hidden="true">
                  <span>Sign In</span>
                  <span>Sign In</span>
                  <span>Sign In</span>
                  <span>Sign In</span>
                </div>
              </div>
            </div>
          </>
        }
      </section>
    </main>
  )
}

export default Menu

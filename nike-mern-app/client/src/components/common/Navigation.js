//import ABOUT / SIGN IN / COLLAB  --> AUTH: ADD A COLLAB / YOUR WORLD / LOGOUT


import { Link } from 'react-router-dom'


const Navigation = () => {

  return (
    <>
      <header className="main-header">
        <Link to='/collaborations' id='home-text-link'>Nike x Collab</Link> 
        <Link to='/menu' id='nav-icon'>🌐</Link> 
      </header>
    </>

  )

}

export default Navigation
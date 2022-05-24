// route from Menu
import { Link } from 'react-router-dom'

const SignInLanding = () => {
  return (
    <>
      <h1>SignInLanding</h1>
      <Link to='/signin'>Submit</Link>
      <Link to='/signup'>Click Here</Link>
      {/* <button type="submit"   ><Link to='/signin'>Submit</Link></Button>
      <p>Don`&apos;`t have an account set up? <Link to='/signup'>Click Here</Link> to Sign Up.</p> */}
    </>
  )
}

export default SignInLanding
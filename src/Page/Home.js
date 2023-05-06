import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const checkUser = localStorage.getItem('userData')
  return (
    <div>
    {checkUser?(<div className='container'>
      <div className='home-container text-controller'>
      <h1>Welcome to Quizeez</h1>
      <Link to='/quiz'><button className='custom-button'>Start Quiz Now!</button></Link>
      </div>
    </div>):(<div className='container'>
      <div className='container-error'>
      <h1>You're Not Logged In</h1>
      <Link to='/register'><button className='custom-button'>Register/Login Here!</button></Link>
      </div>
      </div>)}
    </div>
  )
}

export default Home
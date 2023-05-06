import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {

  const navigate = useNavigate()

  const [form,setForm] = useState({
    email:'',
    password:''
  })
  const [invalidEmail,setInvalidEmail] = useState(false)
  const [invalidPassword,setInvalidPassword] = useState(false)

  const userData = JSON.parse(localStorage.getItem('userData'))
  const changeHandler = (el) =>{
    const {name,value} = el.target;
    setForm({
      ...form,
      [name]:value
    })
  }

  const submitHandler = (e)=>{
    e.preventDefault();

    if(userData.email !== form.email){
      setInvalidEmail(true)
    }

    if(userData.email === form.email){
      if(userData.password !== form.password){
        setInvalidPassword(true)
      }
    }

    if(userData.email === form.email && userData.password === form.password){
      navigate('/home')
    }
  }
  return (
<div className='container'>
      <div className='register-container'>
        <div className='register-container-1'>
          <div className='register-center'>
          <div className='register-title'>
          <h1>Welcome to Quizeez</h1>
          <span>Login your account</span>
          </div>
          <form onSubmit={submitHandler}>
          <div className='register-input-controller'>
            <label>Email:</label>
            <input name='email' onChange={changeHandler} className='register-custom-input' type='email' required />
          </div>
          <div className='register-input-controller'>
            <label>Password:</label>
            <input name='password' onChange={changeHandler} className='register-custom-input' type='password'required />
          </div>
          <button className='register-custom-button'>Login</button>
          </form>
          <span>Don't Have account? <Link to='/register'>Register</Link></span>
          {invalidEmail&& <p>Invalid Email</p>}
          {invalidPassword&& <p>Invalid Password</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
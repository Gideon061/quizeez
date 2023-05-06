import React, { useState } from 'react'
import QuestionMark from '../Assets/icons8-ask-question-100.png'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [form,setForm] = useState({
    name:'',
    email:'',
    password:''
  })
  const changeHandler = (el) =>{
    const {name,value} = el.target;
    setForm({
      ...form,
      [name]:value
    })
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    localStorage.setItem('userData',JSON.stringify(form))
    navigate('/home')
  }
  return (
    <div className='container'>
      <div className='register-container'>
        <div className='register-container-1'>
          <div className='register-column'>
            <img src={QuestionMark} alt="" />
          <span>Take a quiz</span>
          </div>
        </div>
        <div className='register-container-1'>
          <div className='register-center'>
          <div className='register-title'>
          <h1>Welcome to Quizeez</h1>
          <span>Register your account</span>
          </div>
          <form onSubmit={submitHandler}>
          <div className='register-input-controller'>
            <label>Name:</label>
            <input name='name' onChange={changeHandler} className='register-custom-input' type='text' required />
          </div>
          <div className='register-input-controller'>
            <label>Email:</label>
            <input name='email' onChange={changeHandler} className='register-custom-input' type='email' required />
          </div>
          <div className='register-input-controller'>
            <label>Password:</label>
            <input name='password' onChange={changeHandler} className='register-custom-input' type='password'required />
          </div>
          <button className='register-custom-button'>Register</button>
          </form>
          <span>Already Have account? <Link to='/login'>Login</Link></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
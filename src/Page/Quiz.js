import React, { useState } from 'react'
import Question from '../Components/Question'
import useTimer from '../Hook/useTimer'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Quiz = ({data,load,setCustAnswer}) => {
  const [questionNum,setQuestionNum] = useState(0)
  // console.log(data.results.length)
  const {time} = useTimer()
  // console.log(time)

  const navigate = useNavigate()

  const Navigator = () =>{
    if(time === 0 ){
      navigate('/result')
    }
  }

  Navigator()

  const checkUser = localStorage.getItem('userData')

  return (
    <div className='container'>
      {checkUser?(<div className="quiz-container">
        <h1 className='time-position'>{time}</h1>
        {!load&&data.results.map((item,i)=>{
          return(
            <Question dataCount={data.results.length} setCustAnswer={setCustAnswer} setQuestionNum={setQuestionNum} questionNum = {questionNum} key={i} index={i} question={item} />
          )
        })}
      </div>):<div className='container-error'>
      <h1>You're Not Logged In</h1>
      <Link to='/register'><button className='custom-button'>Register/Login Here!</button></Link>
        </div>}
    </div>
  )
}

export default Quiz
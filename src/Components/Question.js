import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Question = ({question,index,questionNum,setQuestionNum,dataCount,setCustAnswer}) => {
  const navigate = useNavigate();
  const [value,setValue] = useState()
  // console.log(value)
  const questionChecker = (index) =>{
    if(questionNum === index){
      return true
    }

  }
  const handleClick = (e)=>{
    e.preventDefault()
      setQuestionNum(index+1)
      setCustAnswer(value)
      if(questionNum+1 >= dataCount){

        navigate('/result')
      }
  }

  const handleChange = (e) =>{
    setValue(e.target.value)
  }

  let decodedString = atob(question.question)



  return (
    <div>
    {questionChecker(index)&&<div className='question-controller'>
      <h1>{index+1}. {decodedString}</h1>
      <div className='question-answer'>
        <div>
      <input onChange={handleChange} type='radio' name='answer' value='True'/>
      <span>True</span>
      </div>
      <div>
      <input onChange={handleChange} type='radio' name='answer' value='False'/>
      <span>False</span>
      </div>
      </div>
      <button onClick={handleClick} className='custom-button'>Next Question</button>
      
    </div>}
    </div>
  )
}

export default Question
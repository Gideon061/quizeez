import React from 'react'

const Result = ({answer,custAnswer}) => {
  let numCorrect = 0;
let numFalse = 0;
let numUnanswered = 0;

answer.forEach((correctAnswer, index) => {
  const userAnswer = custAnswer[index];
  if (userAnswer) {
    if (correctAnswer === userAnswer) {
      numCorrect++;
    } else {
      numFalse++;
    }
  } else {
    numUnanswered++;
  }
});

// console.log(custAnswer,answer)

  return (
    <div className='container'>
      <div className='result-container'>
      <h1>Result</h1>
      <p>Correct: {numCorrect}</p>
      <p>False: {numFalse}</p>
      <p>Not Answered: {numUnanswered}</p>
      <a href='/home'><button className='custom-button'>Play Again</button></a>
      </div>
    </div>
  )
}

export default Result
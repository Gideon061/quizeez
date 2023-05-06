import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Page/Login';
import Register from './Page/Register';
import Home from './Page/Home';
import Quiz from './Page/Quiz';
import Result from './Page/Result';
import useAPI from './Hook/useAPI';
import { useEffect, useState } from 'react';

function App() {
  const {data,load} = useAPI()
  const [answer,setAnswer] = useState([])
  const [custAnswer, setCustAnswer] = useState([])
  useEffect(() => {
    if (!load && data && data.results) {
      setAnswer(data.results.map(item => {
        return atob(item.correct_answer)
      }));
    }
  }, [data, load]);

  // console.log(answer)
  const handleSetCustAnswer = (custAnswer) =>{
    setCustAnswer((prevAnswer)=>{
      return [...prevAnswer,custAnswer]
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
        <Route
          path="*"
          element={<Register to="/register" replace />}
      />
          <Route element={<Register />} path='/register' />
          <Route element={<Login />} path='/login' />
          <Route element={<Home />} path='/home' />
          <Route element={<Quiz setCustAnswer ={handleSetCustAnswer} data={data} load={load} />} path='/quiz' />
          <Route element={<Result answer={answer} custAnswer={custAnswer} />} path='/result' />
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react'

const useTimer = () =>{
  const [time,setTime] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time => {
        if (time === 0) {
          clearInterval(timer);
        }
        return time - 1;
      });
    }, 1000);

    return ()=> clearInterval(timer);
  },[]);

  return {time}
}

export default useTimer
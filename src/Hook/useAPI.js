import { useEffect, useState } from "react"

const useAPI = () => {
  const [data,setData] = useState([])
  const [load,setLoad] = useState(true)
  useEffect(()=>{
    const getData = async() =>{
      const response = await fetch("https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=boolean&encode=base64",{
        method:"GET",
        contentType:'application/json'
      })

      const json = await response.json()
      if(response.ok){
        setLoad(false)
        setData(json)
      }

      if(!response.ok){
        setLoad(true)
      }
    }

    getData()
  },[])

  return {data,load}
}

export default useAPI
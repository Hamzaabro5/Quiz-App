import axios from 'axios';
import React, { useEffect, useState } from 'react'

function App() {
  const [question , setQuestion] = useState(``)
 

   useEffect(() => {
     
    axios("https://the-trivia-api.com/v2/questions")
    .then((res) => {
      console.log(res.data)
      setQuestion(res.data)
    }).catch((err) => {
      console.log(err);
    })

   
   }, [])
   
  return (
    <>

    </>
  )
}

export default App







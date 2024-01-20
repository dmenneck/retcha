import React, { useState } from 'react'
import { Retcha, useRetcha } from './lib'
// import { Retcha, useRetcha } from "../dist/retcha.es.js"

const App = () => {
  const { captcha, updateCaptcha, validateCaptcha } = useRetcha(8);
  const [input, setInput] = useState()
  const containerStyle = {
    width: "200px",
    height: "100px",
    backgroundColor: "blue",
    color: "red",
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
  }

  return (
    <>
      <Retcha
        containerStyle={containerStyle}
        
        count={6}
        captcha={captcha}
      />  
      
      <input onChange={(e) => setInput(e.target.value)} type="text" name="" id="" />
      <button onClick={() => updateCaptcha()}>updateCaptcha</button>
      <button onClick={() =>  {
        alert(validateCaptcha(input))
        console.log(input, captcha)
      }}>validateCaptcha</button>

    </>

  )
}

export default App;
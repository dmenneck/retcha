import React, { useState } from 'react'
import { Retcha, useRetcha } from './lib'
// import { Retcha, useRetcha } from "../dist/retcha.es.js"

const App = () => {
  const { captcha, updateCaptcha, validateCaptcha, readCaptcha } = useRetcha(8);
  const [input, setInput] = useState()

  const containerStyle = {
    width: "380px",
    height: "100px",
    border: "1px solid black",
    color: "black",
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3rem",
    marginBottom: "2rem",
    position: "relative",
    overflow: "hidden"
  }

  return (
    <div className='container'>
      <Retcha
        containerStyle={containerStyle}
        captcha={captcha}
      />  

      <div>
        <input 
          className='captcha-input'
          onChange={(e) => setInput(e.target.value)} type="text" name="" id="" />
        <button onClick={() => updateCaptcha()}>updateCaptcha</button>
        <button onClick={() =>  {
          alert(validateCaptcha(input))
          console.log(input, captcha)
        }}>validateCaptcha</button>
        <button onClick={() =>  {
          readCaptcha()
        }}>readCaptcha</button>
      </div>
      


    </div>

  )
}

export default App;
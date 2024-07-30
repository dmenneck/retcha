# retcha

> retcha is a lightweight and user-friendly React component designed to simplify the integration of captcha functionality into your web applications. 

## Installation

Install the retcha npm package in your React project:


```sh
$ npm install retcha
```

## Usage

```js
import React, { useState } from 'react'
import { Retcha, useRetcha } from 'retcha'

const App = () => {
  const { captcha, updateCaptcha, validateCaptcha } = useRetcha(8);
  const [input, setInput] = useState()

  // style the container as you like
  const containerStyle = {
    width: "200px",
    height: "100px",
    backgroundColor: "grey",
    color: "red",
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    // ...
  }

  return (
    <>
      <Retcha
        containerStyle={containerStyle}
        captcha={captcha}
      />  
      
      <input onChange={(e) => setInput(e.target.value)} type="text" />
      <button onClick={() => updateCaptcha()}>updateCaptcha</button>
      <button onClick={() =>  {
        alert(validateCaptcha(input))
      }}>validate captcha</button>
    </>

  )
}

export default App;
```

## useRetcha hook

```js
const { captcha, updateCaptcha, validateCaptcha } = useRetcha(count);
```
- `count` (number) = number of characters in the captcha
- `validateCaptcha` (function) = pass a string to validate against the current captcha value
- `updateCaptcha` (function) = generate a new captcha string
- `captcha` (string) = current captcha string

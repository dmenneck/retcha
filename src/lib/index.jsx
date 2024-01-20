import React from "react";

export const Retcha = (props) => {
  const {
    containerStyle,
    captcha
  } = props;

  return (
    <div 
      style={containerStyle}
    >
      {captcha && captcha.split("").map((char, index) => {
        return (
          <span 
            key={index}
            style={{ 
              fontWeight: 600,
              fontSize: containerStyle.fontSize ? containerStyle.fontSize  : "1rem",
              fontFamily: "family"
            }}
          >{char} </span>
        )
      })}
    </div>
  )
}

export const useRetcha = (initialValue) => {
  const [captcha, setCaptcha] = React.useState();

  function generateRandomString(n) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
  
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
  
    return randomString;
  }

  const updateCaptcha = () => {
    const randomString = generateRandomString(initialValue);

    console.log("updateCaptcha")

    setCaptcha(randomString);
  };

  const validateCaptcha = (input) => {
    if (input === captcha) return true
    else return false;
  }

  if (!captcha) {
    updateCaptcha(initialValue)
  }
  
  return { captcha, updateCaptcha, validateCaptcha };
};

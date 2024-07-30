import React from "react";

export const Retcha = (props) => {
  const {
    containerStyle,
    captcha
  } = props;

  function applyRandomRotation(minRotation, maxRotation) {
    // Generate a random rotation value within the specified range
    const rotation = Math.random() * (maxRotation - minRotation) + minRotation;
    
    // Apply the rotation to the element
    return `rotate(${rotation}deg)`
  }

  function applyRandomMarginRight(minMargin, maxMargin) {
    // Generate a random margin-right value within the specified range
    const marginRight = Math.random() * (maxMargin - minMargin) + minMargin;
  
    // Apply the margin-right to the element
    return `${marginRight}px`;
  }

  function getRandomValue() {
    return Math.random() * (100 - (-100)) + (-100);
  }

  return (
    <div 
      style={containerStyle}
      onCopy={(e) => {
        e.preventDefault();
        return false;
      }}
    >
      <div id ="circles">
        <div 
          style={{
            width: "120px",
            height: "120px",
            position: "absolute",
            left: "-5%",
            bottom: "-25%",
            borderRadius: "50%",
            backgroundColor: "#B9E1EF",
            border: "4px solid #DF5A53"
          }}
          ></div>
        <div 
          style={{
            width: "150px",
            height: "150px",
            right: "10%",
            top: "-10%",
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: "white",
            border: "4px solid #407291"
          }}
          ></div>
        <div
          style={{
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            position: "absolute",
            backgroundImage: "radial-gradient(#3B9CCB .8px, transparent 0)",
            backgroundSize: "8px 8px"
          }}
          className="dots"></div>
      </div>
      {captcha && captcha.split("").map((char, index) => {
        return (
          <span 
            key={index}
            style={{ 
              fontWeight: 600,
              fontSize: containerStyle.fontSize ? containerStyle.fontSize  : "1rem",
              fontFamily: "family",
              transform: applyRandomRotation(-20, 20),
              marginRight: applyRandomMarginRight(-5, 20),
            }}
          >{char}</span>
        )
      })}
    </div>
  )
}

export const useRetcha = (initialValue) => {
  const [captcha, setCaptcha] = React.useState();

  function generateRandomString(n) {
    const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ123456789';
    let randomString = '';
  
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
  
    return randomString;
  }

  const readCaptcha = () => {
    const synth = window.speechSynthesis;

    captcha.split("").map((char) => {
      setTimeout(() => {
        const utterThis = new SpeechSynthesisUtterance(char)
    
        synth.speak(utterThis);
      }, 600)
    })
  }

  const updateCaptcha = () => {
    const randomString = generateRandomString(initialValue);

    setCaptcha(randomString);
  };

  const validateCaptcha = (input) => {
    if (input === captcha) return true
    else return false;
  }

  if (!captcha) {
    updateCaptcha(initialValue)
  }
  
  return { captcha, updateCaptcha, validateCaptcha, readCaptcha };
};

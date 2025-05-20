import { useState, useEffect } from "react";

const Button = ({ buttonText, mobileButtonText = "Zobacz" }) => {
  const [currentButtonText, setCurrentButtonText] = useState(buttonText);

  const handleResize = () => {
    if (window.innerWidth < 460) {
      setCurrentButtonText(mobileButtonText);
    } else {
      setCurrentButtonText(buttonText);
    }
  };

  useEffect(() => {
    handleResize();
    
    window.addEventListener("resize", handleResize);
    
    return () => {
        window.removeEventListener("resize", handleResize);
    };

  }, [buttonText, mobileButtonText]);
  
  return (
    <button className="banner-button">
      {currentButtonText}
    </button>
  );
};

export default Button;
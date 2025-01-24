import React from "react";

function Button({ 
    type = "submit", 
    name = "",
    className = "", 
    ...props 
}) {
  return (
    <button
      className={`sm:text-base  px-5 sm:py-2 py-1  ${type} ${className} ${props} `}
    >
      {name}
    </button>
  );
}

export default Button;
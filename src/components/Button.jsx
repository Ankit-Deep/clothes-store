import React from "react";

function Button({ 
    type = "submit", 
    name = "",
    className = "", 
    ...props 
}) {
  return (
    <button
      className={`text-base sm:px-5 px-6 py-2  ${type} ${className} `}
    >
      {name}
    </button>
  );
}

export default Button;
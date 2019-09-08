import React from "react";
import "../style/button.css";

const Button = ({ children, onClick }) => (
  <button onClick={onClick} className="buttonStyles">
    {children}
  </button>
);

export default Button;

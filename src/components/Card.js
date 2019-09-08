import React from "react";
import "../style/app.css";
import "../style/card.css";


const Card = ({ zIndex = 0, children }) => (
  <div className="cardStyles" style={{ zIndex }}>{children}</div>
);

export default Card;
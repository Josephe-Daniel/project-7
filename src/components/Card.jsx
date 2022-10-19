import React from "react";

const Card = ({ lodging }) => {
  return (
    <li className="card_block">
      <div className="card">
        <img src={lodging.cover} alt={lodging.title} />
        <p>{lodging.title}</p>
      </div>
    </li>
  );
};

export default Card;

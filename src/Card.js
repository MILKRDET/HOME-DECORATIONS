import React from 'react';
import './Card.css'; // สไตล์การ์ด

const Card = ({ imageUrl, name, color, model, price }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} className="card-image" />
      <div className="card-details">
        <h2 className="card-title">{name}</h2>
        <p className="card-color">color: {color}</p>
        <p className="card-model">model: {model}</p>
        <p className="card-price">price: {price} THB</p>
      </div>
    </div>
  );
};

export default Card;

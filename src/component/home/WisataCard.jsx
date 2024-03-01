// WisataCard.jsx

import React, { useState } from "react";
import "./WisataCard.css";

const WisataCard = ({ id, name, description, imageUrl }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="card">
      <img src={imageUrl} alt={name} className="card-image" />
      <div className="card-content">
        <h2>{name}</h2>
        {showFullDescription ? (
          <p>{description}</p>
        ) : (
          <p>{description.slice(0, 100)}...</p>
        )}
        <button onClick={toggleDescription}>
          {showFullDescription ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default WisataCard;

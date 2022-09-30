import React from "react";

const CardInfo = ({ card }) => {
  return (
    <div className="info-card">
      <div className="info-id-column">
        <h2 className="card-id">{card.id}</h2>
      </div>
      <div className="info-card-column">
        <h4 className="card-title-h4">{card.title}</h4>

        <p className="blurb-p my-2">{card.blurb}</p>
      </div>
    </div>
  );
};

export default CardInfo;

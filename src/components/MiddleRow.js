import React, { useState } from "react";
import CardInfo from "./CardInfo";

const MiddleRow = () => {
  const [cardData, setCardData] = useState([
    {
      id: "01",
      title: "Track company-wide progress",
      blurb:
        "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      id: "02",
      title: "Advanced built-in reports",
      blurb:
        "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      id: "03",
      title: "Everything you need in one place",
      blurb:
        "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution",
    },
  ]);
  return (
    <div className="middlerow">
      <div className="middle-column">
        <h1 className="middle-h1">What's different about Manage?</h1>
        <p className="middle-p my-2">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="middle-column middle-card-column">
        {cardData.map((c) => (
          <CardInfo key={c.id} card={c} />
        ))}
      </div>
    </div>
  );
};

export default MiddleRow;

/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./BadgeItem.css";

function BadgeItem() {
  return (
    <div className="badge__item">
      <img src="https://media.discordapp.net/attachments/885636389415313440/886304765565362257/tourette-pin.png" />
      <div className="badge__label">Badge Label</div>
      <button>Order Now</button>
    </div>
  );
}

export default BadgeItem;

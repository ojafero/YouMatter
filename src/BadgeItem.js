/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./BadgeItem.css";

function BadgeItem() {
  return (
    <div className="badge__item">
      <div className="badge__image">
        <img src="https://media.discordapp.net/attachments/885636389415313440/886304765565362257/tourette-pin.png" />
      </div>
      <div className="badge__label">
        <para>Badge Label</para>
      </div>
    </div>
  );
}

export default BadgeItem;

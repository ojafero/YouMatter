/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./BadgeItem.css";
import { Link } from "react-router-dom";

function BadgeItem() {
  return (
    <div className="badge__item">
      <Link to="/Orders">
        <div className="badge__image">
          <img src="https://media.discordapp.net/attachments/885636389415313440/886304765565362257/tourette-pin.png" />
        </div>
      </Link>
      <div className="badge__label">
        <para>Badge Label</para>
      </div>
    </div>
  );
}

export default BadgeItem;

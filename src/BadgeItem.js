/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./BadgeItem.css";
import { Link } from "react-router-dom";

function BadgeItem({ badgeLabel, badgeImg }) {
  return (
    <div className="badge__item">
      <Link to="/Orders">
        <div className="badge__image">
          <img src={badgeImg} />
        </div>
      </Link>
      <div className="badge__label">{badgeLabel}</div>
    </div>
  );
}

export default BadgeItem;

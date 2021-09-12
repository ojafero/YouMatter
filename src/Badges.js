/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import BadgeItem from "./BadgeItem";
import "./Badges.css";
import Navbar from "./Navbar";

function Badges() {
  return (
    <div className="badgesPage">
      <Navbar />
      <div className="banner">
        <img src="https://images.unsplash.com/photo-1579208570378-8c970854bc23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1590&q=80" />
      </div>
      <div className="badgesPage__description">
        <h2>Find your badge</h2>
        <hr />
      </div>
      <div className="badges__list">
        <BadgeItem />
        <BadgeItem />
        <BadgeItem />
        <BadgeItem />
        <BadgeItem />
        <BadgeItem />
        <BadgeItem />
        <BadgeItem />
        <BadgeItem />
        <BadgeItem />
        <BadgeItem />
        <BadgeItem />
      </div>
    </div>
  );
}

export default Badges;

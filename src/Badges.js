/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import BadgeItem from "./BadgeItem";
import "./Badges.css";
import Navbar from "./Navbar";
import db from "./firebase";
import { useState, useEffect } from "react";

function Badges() {
  const [badgesList, setBadgesList] = useState([]);

  useEffect(() => {
    db.collection("badges").onSnapshot((snapshot) => {
      setBadgesList(snapshot.docs.map((doc) => doc.data()));
    });

    console.log("Effect called");
  }, []);
  console.log(badgesList);

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
        {badgesList.map((badge) => (
          <BadgeItem badgeLabel={badge.badgeName} badgeImg={badge.badgeImg} />
        ))}
        <BadgeItem
          badgeLabel="Cancer Badge"
          badgeImg="https://firebasestorage.googleapis.com/v0/b/youmatter-6b781.appspot.com/o/Cancer_final.png?alt=media&token=de898121-2b6e-4d6e-8aad-af3d147665c7"
        />
      </div>
    </div>
  );
}

export default Badges;

/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import BadgeItem from "./BadgeItem";
import "./Badges.css";

function Badges() {
  return (
    <div>
      <div className="banner">
        <img src="https://s3-alpha-sig.figma.com/img/a4e4/d6d0/8c8de2cc326895f2f28438aa4978800c?Expires=1632096000&Signature=ZHojtMXnaqZNBHu2RsqqjeIF7vPZ~mm9d-q6-pFqq80nbxSWUycqaEcwXzMbSSKLvqbHlKAp9oeK0Ufk1Ywsty8AfOKf86MFnvnWWSpHUDj0XNl8hF8y2Fd80PSJ-FYQAyix46HunojtsmQTIUW8bV87FPnehaYummsDFXefjc06BtTG8xzHsXYlJMgYVPfus57E4J8kzhEsjikRn6SH41NRAzrKTgelS4IwcanbbSRXqQ276gWMQVjw81y39GCtAwmxiJN0r-Y5oNbrQxvKCU-qiDp5~379g4quHaH7MnO7X8uQuVWxjLY-nIZlAjbgebG2xMwiBVAhg~Bj0ny1YQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
      </div>
      <div className="badges__list">
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

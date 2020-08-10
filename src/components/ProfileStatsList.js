import React from "react";

import ProfileStatsItem from "./ProfileStatsItem";
import user from '../user.json';
import style from './ProfileStatsList.module.css';

const ProfileStatsList = () => {

  const listStyle = [style.stats]

  return (
    <ul className={listStyle.join(" ")}>
      <ProfileStatsItem {...user}/>
    </ul>
  );
};

export default ProfileStatsList;

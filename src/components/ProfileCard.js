import React from "react";

import ProfileDescr from "./ProfileDescr";
import ProfileStatsList from "./ProfileStatsList";
import user from '../user.json';
import style from './ProfileCard.module.css';

const ProfileCard = () => {
  const cardClasses = [style.profile];

  return (
    <div className={cardClasses.join(" ")}>
      <ProfileDescr {...user} />
      <ProfileStatsList />
    </div>
  );
};

export default ProfileCard;

import React from "react";
import style from './ProfileDescr.module.css';

const ProfileDescr = ({name, tag, location, avatar}) => {

  const descrStyle = [style.description];
  const avatarStyle = [style.avatar];
  const nameStyle = [style.name];
  const tagStyle = [style.tag];
  const locationStyle = [style.location];

  return (
    <div className={descrStyle.join(" ")}>
      <img src={avatar} alt={name} className={avatarStyle.join(" ")} />
      <p className={nameStyle.join(" ")}>{name}</p>
  <p className={tagStyle.join(" ")}>@{tag}</p>
      <p className={locationStyle.join(" ")}>{location}</p>
    </div>
  );
};

export default ProfileDescr;

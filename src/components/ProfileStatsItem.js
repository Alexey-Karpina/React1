import React, { Fragment } from "react";
import style from './ProfileStatsItem.module.css';
const ProfileStatsItem = ({ stats }) => {

  const itemStyle = [style.item];
  const labelStyle = [style.label];
  const quantityStyle = [style.quantity];

    return (
      <Fragment>
        <li className={itemStyle.join(" ")}>
          <span className={labelStyle.join(" ")}>Followers</span>
          <span className={quantityStyle.join(" ")}>{stats.followers}</span>
        </li>
        <li className={itemStyle.join(" ")}>
          <span className={labelStyle.join(" ")}>Views</span>
          <span className={quantityStyle.join(" ")}>{stats.views}</span>
        </li>
        <li className={itemStyle.join(" ")}>
          <span className={labelStyle.join(" ")}>Likes</span>
          <span className={quantityStyle.join(" ")}>{stats.likes}</span>
        </li>
      </Fragment>
    );
};

export default ProfileStatsItem;

import React from 'react';
import classes from './banner.module.css';
import ArrowUp from '../assets/arrow-up.png';
import ArrowDown from '../assets/arrow-down.png';
import LandingImg from '../assets/landing-section-image.png';
const banner =() =>  {
  return (
    <div className={classes.MainSection}>
      <div className={classes.LeftSection}>
        <h1 className={classes.SectionHeading}>
          Stunning Workplace<div className={classes.DotNext}></div>
        </h1>
        <p className={classes.Description}>
          With Stunning, remote teams can organize projects, manage shifting
          priorities, and get work done.
        </p>
        <div className={classes.BtnWrapper}>
          <p className={classes.Accountbtn}>New Account</p>
          <img className={classes.ArrowUp} src={ArrowUp} alt='Arrow-up' />
          <img className={classes.ArrowDown} src={ArrowDown} alt='Arrow-down' />
        </div>
      </div>
      <div className={classes.RightSection}>
        <img className={classes.BannerImg} src={LandingImg} alt='landing-section'/>
      </div>
    </div>
  );
}
export default banner;
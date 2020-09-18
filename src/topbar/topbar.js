import React from 'react';
import classes from './topbar.module.css';
import logo from '../assets/stunning-logo.png';

const topbar = ()=>{
    return(
        <header className={classes.topbar}>
            <img className={classes.logo} src={logo} alt="topbar-logo"/>
            <div className={classes.navWrapper}>
                <span className={classes.nav}>Home</span>
                <span className={classes.nav}>About</span>
                <span className={classes.nav}>Blog</span>
                <span className={classes.nav}>Jobs</span>
            </div>
            <button className={classes.button}>Your Account</button>
            <div className={classes.hamburgerIcon}>
                <i class="fas fa-bars"></i>
            </div>
        </header>
    );
}

export default topbar;
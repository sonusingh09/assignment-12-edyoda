import React from 'react';
import classes from './usersection.module.css';
import tickGrey from '../assets/tick-gray.png';
import tickBlue from '../assets/tick-blue.png';
import userRed from '../assets/user-red.png';
import userBlue from '../assets/user-blue.png';
import userOrange from '../assets/user-orange.png';
import userPink from '../assets/user-pink.png';

const userSection = ()=>{
    let arr = [
        {
            tick: tickGrey,
            title: "Dmm design",
            profile: userPink,
            date: "20 Dec",
            span: {backgroundColor: "pink"}
        },
        {
            tick: tickBlue,
            title: "Blurr animation",
            profile: userOrange,
            date: "22 Dec",
            span: {backgroundColor: "red"}
        },
        {
            tick: tickGrey,
            title: "Illustration",
            profile: userBlue,
            date: "26 Dec",
            span: {backgroundColor: "green"}
        },
        {
            tick: tickGrey,
            title: "Refunds",
            profile: userRed,
            date: "28 Dec",
            span: {backgroundColor: "orange"}
        }
    ]


    let RenderCard = arr.map(item =>{

        return(
            <div className={classes.main}>
                <div className={classes.userName}>
                    <img className={classes.ActiveImage} src={item.tick} alt="" />
                    <p className={classes.itemTitle}>{item.title}</p>
                </div>
                <div className={classes.itemColorDiv}> 
                    <img className={classes.userProfile} src={item.profile} alt="" />
                    <p className={classes.itemDate}>{item.date}</p>
                    <span className={classes.itemSpan} style={item.span}></span>
                </div>
            </div>
        );
    })

    return(
        <div className={classes.itemsWrapper}>
            {RenderCard}
        </div>
    );
}
export default userSection;
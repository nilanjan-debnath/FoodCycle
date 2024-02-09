import React, { useEffect } from "react";
import styles from "./css/progress.module.css";
import ProgressOne from "./ProgressOne";
import ProgressThree from "./ProgressThree";
import ProgressTwo from "./ProgressTwo";
import Logo from "../../public/images/logo.png";
import Background from "../../public/images/one.png"

function Progress() {
    return (
        <>
            <div className={`${styles.navbar}`}>
                <img id={`${styles.logo}`} src={Logo} alt="" />
                <div className={`${styles.logoText}`}>
                <h1>FoodCycle</h1>
                <p>Lorem ipsum dolor sit.</p>
                </div>
            </div>
            <div className="donate">
                <img className={`${styles.image}`} src={Background} alt="" />
            </div>
            <div className={`${styles.top}`}>
                <h1 className={`${styles.heading}`}>We have been here for you since 2023</h1>
                <p className={`${styles.p}`}>Our operation allows us to help up to 200 meals donation per day! A well-established system comprising
                    around four major cities (Delhi, Mumbai, Bangalore and Kolkata) in addition to 20 normal cities.</p>

                <div className={`${styles.topBoxText}`}>
                    <div className={`${styles.col}`}>
                        <h2>4.1K+</h2>
                        <h3>registered member </h3>
                    </div>
                    <div className={`${styles.col}`}>
                        <h2>&#8377;2.7K+</h2>
                        <h3>average donation per month</h3>
                    </div>
                    <div className={`${styles.col}`}>
                        <h2>200+</h2>
                        <h3>food distribution per day</h3>
                    </div>
                </div>
            </div>
            <div className={`${styles.middle}`}>
                <ProgressOne />
                <ProgressTwo />
                <ProgressThree />
            </div>
            <div className="bottom"></div>
        </>
    )
}
export default Progress;
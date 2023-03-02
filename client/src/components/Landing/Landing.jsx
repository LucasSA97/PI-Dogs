import React from "react";
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";

function Landing () {
    return(
        <div className={styles.backGround}>
            <h1 className={styles.title}>Welcome to PI-Dogs</h1>
            <Link to="/home">
                <button className={styles.landingButton}>Home</button>
            </Link>
        </div>
    )
}

export default Landing;
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";



function NavBar ( ) {
     return(
        <div className={styles.navBar}>
            <div>
                <SearchBar></SearchBar>
            </div>
            <div>
            <Link to="/home">Home</Link>
            </div>
            <div>
            <Link to="/form">Create Dog</Link>
            </div>
        </div>
     )
}

export default NavBar;




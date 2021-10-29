import React from 'react';
import classes from './NavBar.module.css'
import {Link} from "react-router-dom";

const NavBar = () => (
    <div className={classes.NavBar}>
        <div className={classes.NavBar__container}>
            <div className={classes.NavBar__title}>
                <h3>React Example</h3>
            </div>
            <div className={classes.NavBar__subTitles}>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/photos">Photos</Link>
            </div>
        </div>
    </div>
);

export default NavBar;
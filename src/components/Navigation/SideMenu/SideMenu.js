import React from 'react';

import classes from './SideMenu.module.css';

import Logo from '../../../containers/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideMenu = (props) => {
    let attachedClasses = [classes.SideMenu, classes.Close];

    if(props.open) {
        attachedClasses = [classes.SideMenu, classes.Open];
    }

    return (
        <aside 
            id="SideMenu" 
            className={attachedClasses.join(' ')}>
            <header>
                <Logo />
            </header>
            <nav>
                <NavigationItems />
            </nav>
            <footer>
                <ul className={classes.Footer}>
                    <li><h4>Kelvin Hammond</h4></li>
                    <li><h4>406.652.3174</h4></li>
                    <li><h4>kelvin.bigsky@gmail.com</h4></li>
                    <li><i className="fab fa-facebook-square"></i></li>
                </ul>
            </footer>
        </aside>
    );
};

export default sideMenu;
import React from 'react';

import classes from './NavigationItems.module.css';

const NavigationItems = () => {
    const path = window.location.pathname;

    const scroll = (name) => {
        if(path === '/') {
            linkScrollHandler(name);
        } else {
            window.location.href = '/#' + name;
        }
    }

    const linkScrollHandler = (name) => {
        let elemId = '#' + name;
        document.querySelector(elemId).scrollIntoView({behavior: 'smooth'});
    }

    return (
        <ul className={classes.NavigationItems} id="NavigationItems">
            <li onClick={() => scroll("Portfolio")} >
                <button className={classes.MenuLink}>Portfolio</button>
            </li>
            <li onClick={() => scroll("ContactMe")} >
                <button className={classes.MenuLink}>Contact</button>
            </li>
            <li onClick={() => scroll("AboutMe")} >
                <button className={classes.MenuLink}>About</button>
            </li>
        </ul>
    );
}

export default NavigationItems;
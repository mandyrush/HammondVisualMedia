import React, {Component} from 'react';

import classes from './NavigationItems.module.css';

class NavigationItems extends Component {
    linkScrollHandler(name) {
        let elemId = '#' + name;
        document.querySelector(elemId).scrollIntoView({behavior: 'smooth'});
    }

    render() {
        return (
            <ul className={classes.NavigationItems} id="NavigationItems">
                <li onClick={() => this.linkScrollHandler("Portfolio")} >
                    <button className={classes.MenuLink}>Portfolio</button>
                </li>
                <li onClick={() => this.linkScrollHandler("ContactMe")} >
                    <button className={classes.MenuLink}>Contact</button>
                </li>
                <li onClick={() => this.linkScrollHandler("AboutMe")} >
                    <button className={classes.MenuLink}>About</button>
                </li>
            </ul>
        );
    }
}

export default NavigationItems;
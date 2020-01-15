import React, {Component} from 'react';

import classes from './SideMenu.module.css';
import Logo from '../../assets/images/logo.gif';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

class SideMenu extends Component {
    componentDidMount() {
        let menu = document.querySelector("#SideMenu");
        let navItems = document.querySelector("#NavigationItems");
        setTimeout(() => {
            menu.style.width = '20%';
            navItems.style.flexDirection = 'column';
        }, 1500)
    }

    render() {
        return (
            <aside id="SideMenu" className={classes.SideMenu}>
                <header>
                    <img 
                        src={Logo} 
                        alt="Hammond Visual Media Logo" 
                        className={classes.Logo}/>
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
    }
};

export default SideMenu;
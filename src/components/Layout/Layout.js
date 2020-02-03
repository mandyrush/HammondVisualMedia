import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';

import classes from './Layout.module.css';
import SideMenu from '../Navigation/SideMenu/SideMenu';
import Hamburger from '../Navigation/Hamburger/Hamburger';
import Home from '../Home/Home';
import PortfolioGallery from '../PortfolioGallery/PortfolioGallery';


const Layout = () => {
    const [showSideMenu, setShowSideMenu] = useState(true);

    useEffect(() => {
        let windowHeight = window.innerHeight;
        let windowWidth = window.innerWidth;
        let sideMenu = document.querySelector("#SideMenu");
        let navItems = document.querySelector("#NavigationItems");

        sideMenu.style.height = windowHeight + 'px';

        if(windowWidth >= 1035 && window.location.pathname === '/') {
            sideMenu.style.width = '60%';
            navItems.style.flexDirection = 'row';

            setTimeout(() => {
                sideMenu.style.transition = 'width 2s';
                sideMenu.style.width = '20%';
                navItems.style.flexDirection = 'column';
            }, 1500)
        }        

        if(windowWidth < 1035) {
            sideMenu.style.width = '100%';
            navItems.style.flexDirection = 'column';
            setShowSideMenu(false);
        }
    }, []);

    const toggleHamburgerHandler = () => {
        setShowSideMenu(!showSideMenu)
    }

    

    return (
        <section>
            <SideMenu 
                open={showSideMenu} />
            <main className={classes.Main}>
                <Hamburger 
                    toggle={toggleHamburgerHandler} />
                <Route path='/' exact component={Home} />
                <Route path="/portfolio" component={PortfolioGallery} />
            </main>
        </section>
    );
};

export default Layout;
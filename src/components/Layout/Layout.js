import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';

import classes from './Layout.module.css';
import SideMenu from '../Navigation/SideMenu/SideMenu';
import Hamburger from '../Navigation/Hamburger/Hamburger';
import LogoMain from '../../assets/images/logo.gif';
import LogoCrosshair from '../../assets/images/logo_and_crosshair.gif';
import Home from '../Home/Home';
import PortfolioGallery from '../PortfolioGallery/PortfolioGallery';


const Layout = (props) => {
    const [showSideMenu, setShowSideMenu] = useState(true);
    const [logoSrc, setLogoSrc] = useState(LogoMain);

    useEffect(() => {
        let windowHeight = window.innerHeight;
        let windowWidth = window.innerWidth;
        let sideMenu = document.querySelector("#SideMenu");
        let navItems = document.querySelector("#NavigationItems");

        sideMenu.style.height = windowHeight + 'px';

        if(windowWidth >= 1035) {
            setTimeout(() => {
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
        setShowSideMenu(prevState => {
            return !prevState.showSideMenu;
        })
    }

    const onLogoHoverEnterHandler = () => {
        setLogoSrc(LogoCrosshair);
    }

    const onLogoHoverLeaveHandler = () => {
        setLogoSrc(LogoMain);
    }

    return (
        <section>
            <SideMenu 
                logoSrc={logoSrc}
                logoHoverEnter={onLogoHoverEnterHandler}
                logoHoverLeave={onLogoHoverLeaveHandler}
                open={showSideMenu}/>
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
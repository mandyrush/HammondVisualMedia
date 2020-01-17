import React, {Component} from 'react';

import classes from './Layout.module.css';
import SideMenu from '../../components/Navigation/SideMenu/SideMenu';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import AboutMe from '../../components/AboutMe/AboutMe';
import ContactMe from '../../components/ContactMe/ContactMe';
import Portfolio from '../../components/Portfolio/Portfolio';
import Hamburger from '../../components/Navigation/Hamburger/Hamburger';
import LogoMain from '../../assets/images/logo.gif';
import LogoCrosshair from '../../assets/images/logo_and_crosshair.gif';


class Layout extends Component {
    state = {
        showSideMenu: true,
        logoSrc: LogoMain
    }

    componentDidMount() {
        let windowHeight = window.innerHeight;
        let windowWidth = window.innerWidth;
        let sideMenu = document.querySelector("#SideMenu");
        let navItems = document.querySelector("#NavigationItems");
        let jumbotron = document.querySelector("#Jumbotron");
        let aboutMe = document.querySelector("#AboutMe");
        let contactMe = document.querySelector("#ContactMe");
        let portfolio = document.querySelector("#Portfolio");
        
        jumbotron.style.maxHeight = windowHeight + 'px';
        sideMenu.style.height = windowHeight + 'px';
        aboutMe.style.minHeight = windowHeight + 'px';
        contactMe.style.minHeight = windowHeight + 'px';
        portfolio.style.minHeight = windowHeight + 'px';

        if(windowWidth >= 1035) {
            setTimeout(() => {
                sideMenu.style.width = '20%';
                navItems.style.flexDirection = 'column';
            }, 1500)
        }

        if(windowWidth < 1035) {
            sideMenu.style.width = '100%';
            navItems.style.flexDirection = 'column';
            this.setState({
                showSideMenu: false
            })
        }
    }

    closeSideMenuHandler = () => {
        this.setState({
            showSideMenu: false
        })
    };

    toggleHamburgerHandler = () => {
        this.setState((prevState) => {
            return {showSideMenu: !prevState.showSideMenu}
        })
    }

    onLogoHoverEnterHandler = () => {
        this.setState({
            logoSrc: LogoCrosshair
        })
    }

    onLogoHoverLeaveHandler = () => {
        this.setState({
            logoSrc: LogoMain
        })
    }

    render() {
        return (
            <section>
                <SideMenu 
                    logoSrc={this.state.logoSrc}
                    logoHoverEnter={this.onLogoHoverEnterHandler}
                    logoHoverLeave={this.onLogoHoverLeaveHandler}
                    open={this.state.showSideMenu}/>
                <main className={classes.Main}>
                    <Hamburger 
                        toggle={this.toggleHamburgerHandler} />
                    <Jumbotron />
                    <Portfolio />
                    <ContactMe />
                    <AboutMe />
                </main>
            </section>
        );
    }
};

export default Layout;
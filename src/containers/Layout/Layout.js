import React, {Component} from 'react';

import classes from './Layout.module.css';
import SideMenu from '../../components/Navigation/SideMenu/SideMenu';
import Hamburger from '../../components/Navigation/Hamburger/Hamburger';
import LogoMain from '../../assets/images/logo.gif';
import LogoCrosshair from '../../assets/images/logo_and_crosshair.gif';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import PortfolioGallery from '../PortfolioGallery/PortfolioGallery';


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
            this.setState({
                showSideMenu: false
            })
        }
    }

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
                    <Route path='/' exact component={Home} />
                    <Route path="/portfolio" component={PortfolioGallery} />
                </main>
            </section>
        );
    }
};

export default Layout;
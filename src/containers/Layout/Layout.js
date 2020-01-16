import React, {Component} from 'react';

import SideMenu from '../../components/Navigation/SideMenu/SideMenu';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import AboutMe from '../../components/AboutMe/AboutMe';
import ContactMe from '../../components/ContactMe/ContactMe';
import Portfolio from '../../components/Portfolio/Portfolio';
import Hamburger from '../../components/Navigation/Hamburger/Hamburger';
import classes from './Layout.module.css';

class Layout extends Component {
    componentDidMount() {
        let windowHeight = window.innerHeight;
        let sideMenu = document.querySelector("#SideMenu");
        let navItems = document.querySelector("#NavigationItems");
        let jumbotron = document.querySelector("#Jumbotron");
        let aboutMe = document.querySelector("#AboutMe");
        let contactMe = document.querySelector("#ContactMe");
        
        jumbotron.style.maxHeight = windowHeight + 'px';
        sideMenu.style.height = windowHeight + 'px';
        aboutMe.style.minHeight = windowHeight + 'px';
        contactMe.style.minHeight = windowHeight + 'px';

        setTimeout(() => {
            sideMenu.style.width = '20%';
            navItems.style.flexDirection = 'column';
        }, 1500)
    }

    render() {
        return (
            <section>
                <SideMenu />
                <main className={classes.Main}>
                    <Hamburger />
                    {/* Routes from props.children */}
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
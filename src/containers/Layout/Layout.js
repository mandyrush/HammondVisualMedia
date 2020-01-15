import React, {Component} from 'react';

import SideMenu from '../../components/SideMenu/SideMenu';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import AboutMe from '../../components/AboutMe/AboutMe';
import ContactMe from '../../components/ContactMe/ContactMe';
import Portfolio from '../../components/Portfolio/Portfolio';

class Layout extends Component {
    componentDidMount() {
        let windowHeight = window.innerHeight;
        let sideMenu = document.querySelector("#SideMenu");
        let navItems = document.querySelector("#NavigationItems");
        let jumbotron = document.querySelector("#Jumbotron");
        
        jumbotron.style.maxHeight = windowHeight + 'px';
        sideMenu.style.height = windowHeight + 'px';

        setTimeout(() => {
            sideMenu.style.width = '20%';
            navItems.style.flexDirection = 'column';
        }, 1500)
    }

    render() {
        return (
            <section>
                <SideMenu />
                <main>
                    {/* Routes from props.children */}
                    <Jumbotron />
                    <AboutMe />
                    <ContactMe />
                    <Portfolio />
                </main>
            </section>
        );
    }
};

export default Layout;
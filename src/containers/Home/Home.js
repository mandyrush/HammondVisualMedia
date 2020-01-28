import React, {Component} from 'react';

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import AboutMe from '../../components/AboutMe/AboutMe';
import ContactMe from '../../components/ContactMe/ContactMe';
import Portfolio from '../../components/Portfolio/Portfolio';

class Home extends Component {
    componentDidMount() {
        let windowHeight = window.innerHeight;
        let jumbotron = document.querySelector("#Jumbotron");
        let aboutMe = document.querySelector("#AboutMe");
        let contactMe = document.querySelector("#ContactMe");
        let portfolio = document.querySelector("#Portfolio");

        jumbotron.style.maxHeight = windowHeight + 'px';
        aboutMe.style.minHeight = windowHeight + 'px';
        contactMe.style.minHeight = windowHeight + 'px';
        portfolio.style.minHeight = windowHeight + 'px';
    }

    render() {
        return (
            <>
                <Jumbotron />
                <Portfolio />
                <ContactMe />
                <AboutMe />
            </>
        );
    } 
}

export default Home;
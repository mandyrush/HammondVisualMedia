import React, { useEffect } from 'react';

import Jumbotron from '../Jumbotron/Jumbotron';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    useEffect(() => {
        let windowHeight = window.innerHeight;
        let jumbotron = document.querySelector("#Jumbotron");
        let aboutMe = document.querySelector("#AboutMe");
        let contactMe = document.querySelector("#ContactMe");
        let portfolio = document.querySelector("#Portfolio");

        jumbotron.style.maxHeight = windowHeight + 'px';
        aboutMe.style.minHeight = windowHeight + 'px';
        contactMe.style.minHeight = windowHeight + 'px';
        portfolio.style.minHeight = windowHeight + 'px';
    }, []);

    return (
        <>
            <Jumbotron />
            <Portfolio />
            <ContactMe />
            <AboutMe />
        </>
    );
}

export default Home;
import React from 'react';

import Jumbotron from '../Jumbotron/Jumbotron';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Portfolio from '../Portfolio/Portfolio';

const home = () => {
    return (
        <>
            <Jumbotron />
            <Portfolio />
            <ContactMe />
            <AboutMe />
        </>
    );
}

export default home;
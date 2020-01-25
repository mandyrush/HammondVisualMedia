import React from 'react';

import classes from './Portfolio.module.css';
import PortfolioCard from '../Portfolio/PortfolioCard/PortfolioCard';
import PortfolioTestImage1 from '../../assets/images/testImages/portfolio_test_image1.jpg';

const cards = [
    {id: 1, source: PortfolioTestImage1, name: 'Architecture'},
    {id: 2, source: PortfolioTestImage1, name: 'Property Videos'},
    {id: 3, source: PortfolioTestImage1, name: 'Recent Work'},
    {id: 4, source: PortfolioTestImage1, name: 'Portraits'},
    {id: 5, source: PortfolioTestImage1, name: 'Landscapes'},
    {id: 6, source: PortfolioTestImage1, name: 'Art'},
]

const card = cards.map(c => {
    const link = '/portfolio/' + c.name.toLowerCase().replace(/\s+/g, '');

    return <div className="column is-4" key={c.id}>
        <a href={link}>
            <PortfolioCard source={c.source} name={c.name} />
        </a>
    </div>
})

const portfolio = () => {
    return (
        <article id="Portfolio" className={classes.Portfolio}>
            <h2 className="subtitle is-3">Portfolio</h2>
            <div className="columns is-multiline">
                {card}
            </div>
        </article>
    );
}

export default portfolio;
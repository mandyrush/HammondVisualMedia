import React from 'react';

import classes from './PortfolioCard.module.css';

const portfolioCard = (props) => {
    const contentClassList = [classes.CardContent, "card-content"]

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={props.source} alt={props.name} />
                </figure>
            </div>
            <div className={contentClassList.join(' ')}>
                <div className="title is-5">
                    {props.name}
                </div>
            </div>
        </div>
    );
}

export default portfolioCard;
import React, { useState, useEffect } from 'react';

const InfiniteScroll = (props) => {
    const [listItems, setListItems] = useState(props.scrollItems);
    const [isFetching, setIsFetching] = useState(false);
    const colOne = listItems.slice(0, listItems.length / 2);
    const colTwo = listItems.slice(listItems.length /2)

    const handleScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
    }

    const fetchMoreListItems = () => {
        setTimeout(() => {
            setListItems(prevListItems => [...prevListItems, ...props.batchItemsTwo]);
            setIsFetching(false);
        }, 2000)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if(!isFetching) return;
        fetchMoreListItems();
    }, [isFetching]);

    return (
        <>
            <div className="columns">
                <div className="column is-6">
                    {colOne.map(item => <img src={item.source} key={item.id} alt={item.alt} />)}
                </div>
                <div className="column is-6">
                    {colTwo.map(item => <img src={item.source} key={item.id} alt={item.alt} />)}
                </div>
            </div>
            {isFetching && 'Fetching more list items...'}
        </>
    );
};

export default InfiniteScroll;
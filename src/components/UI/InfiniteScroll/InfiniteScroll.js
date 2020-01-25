import React, { useState, useEffect } from 'react';

const InfiniteScroll = () => {
    const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1));
    const [isFetching, setIsFetching] = useState(false);

    function handleScroll() {
        if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
    }

    function fetchMoreListItems() {
        setTimeout(() => {
            setListItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
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
            <ul>
                {listItems.map(listItem => <li key={listItem} >{listItem}</li>)}
            </ul>
            {isFetching && 'Fetching more list items...'}
        </>
    );
};

export default InfiniteScroll;
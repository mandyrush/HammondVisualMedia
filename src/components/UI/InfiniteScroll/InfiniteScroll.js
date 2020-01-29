import React, { useState, useEffect } from 'react';
import classes from './InfiniteScroll.module.css';

const InfiniteScroll = (props) => {
    const [colOne, setColOne] = useState(props.batchItemsOne.slice(0, props.batchItemsOne.length / 2));
    const [colTwo, setColTwo] = useState(props.batchItemsOne.slice(props.batchItemsOne.length / 2));
    const [isFetching, setIsFetching] = useState(false);

    const handleScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const fetchMoreListItems = () => {
            setTimeout(() => {
                setColOne(prevListItems => [
                    ...prevListItems, 
                    ...props.batchItemsTwo.slice(0, props.batchItemsTwo.length / 2)]);
                setColTwo(prevListItems => [
                    ...prevListItems, 
                    ...props.batchItemsTwo.slice(props.batchItemsTwo.length / 2)]);
                setIsFetching(false);
            }, 300)
        }

        if(!isFetching) return;
        fetchMoreListItems();
    }, [isFetching, props.batchItemsTwo]);

    const classList = [classes.InfiniteScroll, 'columns']

    return (
        <>
            <div className={classList.join(' ')}>
                <div className="column is-6">
                    {colOne.map(item => <figure key={item.id}><img 
                        src={item.source} 
                        alt={item.alt} /></figure>
                    )}
                </div>
                <div className="column is-6">
                    {colTwo.map(item => <figure key={item.id} ><img
                        src={item.source} 
                        alt={item.alt} /></figure>
                    )}
                </div>
            </div>
            {isFetching && 'Fetching more list items...'}
        </>
    );
};

export default InfiniteScroll;
import React, { useState, useEffect } from 'react';

import classes from './InfiniteScroll.module.css';
import Modal from '../Modal/Modal';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

const InfiniteScroll = (props) => {
    const [items, setItems] = useState(props.batchItemsOne);
    const [colOne, setColOne] = useState(items.filter(img => img.id % 2 !== 0));
    const [colTwo, setColTwo] = useState(items.filter(img => img.id % 2 === 0));
    const [isFetching, setIsFetching] = useState(false);
    const [carouselStart, setCarouselStart] = useState(0);
    const [toggleModal, setToggleModal] = useState(false);

    const handleScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
    }

    const openModalHandler = (id) => {
        setToggleModal(true);

        let item = items.find(item => item.id === id);
        let itemPosition = items.indexOf(item);
        
        setCarouselStart(itemPosition);
    }

    const closeModalHandler = () => {
        setToggleModal(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const fetchMoreListItems = () => {
            setTimeout(() => {
                setItems(prevItems => [...prevItems, ...props.batchItemsTwo]);
                setColOne(prevItems => [...prevItems, ...props.batchItemsTwo.filter(img => img.id % 2 !== 0)]);
                setColTwo(prevItems => [...prevItems, ...props.batchItemsTwo.filter(img => img.id % 2 === 0)]);
                setIsFetching(false);
            }, 300)
        };

        if(!isFetching) return;
        fetchMoreListItems();
    }, [isFetching, props.batchItemsTwo]);


    const classList = [classes.InfiniteScroll, 'columns'];

    let modalContent;

    if(toggleModal) { 
        modalContent = (<ImageCarousel 
            autoplayInterval={3000} 
            speed={1000}
            pauseOnHover={true}
            slideIndex={carouselStart}>
                {items.map(image => 
                    <img 
                        src={image.source} 
                        alt={image.alt} 
                        key={image.id} />
                )}
            </ImageCarousel>
        );
    }

    return (
        <>
            <div className={classList.join(' ')}>
                <Modal 
                    open={toggleModal}
                    close={closeModalHandler}>
                    {modalContent}
                </Modal>
                <div className="column is-6">
                    {colOne.map(item => <figure 
                        key={item.id} 
                        onClick={() => openModalHandler(item.id)}>
                            <img 
                                src={item.source} 
                                alt={item.alt} />
                        </figure>
                    )}
                </div>
                <div className="column is-6">
                    {colTwo.map(item => <figure 
                        key={item.id} 
                        onClick={() => openModalHandler(item.id)} >
                            <img
                                src={item.source} 
                                alt={item.alt} />
                        </figure>
                    )}
                </div>
            </div>
            {isFetching && 'Fetching more list items...'}
        </>
    );
};

export default InfiniteScroll;
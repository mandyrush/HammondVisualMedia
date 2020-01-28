import React, {Component} from 'react';

import classes from './PortfolioGallery.module.css';
import InfiniteScroll from '../../components/UI/InfiniteScroll/InfiniteScroll';

import TestImage1 from '../../assets/images/testImages/portfolio_test1.jpg';
import TestImage2 from '../../assets/images/testImages/portfolio_test2.jpg';
import TestImage3 from '../../assets/images/testImages/portfolio_test3.jpg';
import TestImage4 from '../../assets/images/testImages/portfolio_test4.jpg';
import TestImage5 from '../../assets/images/testImages/portfolio_test5.jpg';
import TestImage6 from '../../assets/images/testImages/portfolio_test6.jpg';
import TestImage7 from '../../assets/images/testImages/portfolio_test7.jpg';
import TestImage8 from '../../assets/images/testImages/portfolio_test8.jpg';
import TestImage9 from '../../assets/images/testImages/portfolio_test9.jpg';
import TestImage10 from '../../assets/images/testImages/portfolio_test10.jpg';

const images = [
    {id: 1, source: TestImage1, alt: 'Picture #1'},
    {id: 2, source: TestImage2, alt: 'Picture #2'},
    {id: 3, source: TestImage3, alt: 'Picture #3'},
    {id: 4, source: TestImage4, alt: 'Picture #4'},
    {id: 5, source: TestImage5, alt: 'Picture #5'},
    {id: 6, source: TestImage6, alt: 'Picture #6'},
    {id: 7, source: TestImage7, alt: 'Picture #7'},
    {id: 8, source: TestImage8, alt: 'Picture #8'},
    {id: 9, source: TestImage9, alt: 'Picture #9'},
    {id: 10, source: TestImage10, alt: 'Picture #10'}
];

const newImageBatch = [
    {id: 11, source: TestImage9, alt: 'Picture #9'},
    {id: 12, source: TestImage4, alt: 'Picture #4'},
    {id: 13, source: TestImage10, alt: 'Picture #10'},
    {id: 14, source: TestImage5, alt: 'Picture #5'},
    {id: 15, source: TestImage1, alt: 'Picture #1'},
    {id: 16, source: TestImage6, alt: 'Picture #6'},
    {id: 17, source: TestImage8, alt: 'Picture #8'},
    {id: 18, source: TestImage2, alt: 'Picture #2'},
    {id: 19, source: TestImage7, alt: 'Picture #7'},
    {id: 20, source: TestImage3, alt: 'Picture #3'}
];

class PortfolioGallery extends Component {
    render() {
        const classList = [classes.PortfolioGallery, 'columns'];

        return (
            <div className={classList.join(' ')}>
                <div className="column">
                    <h2 className="subtitle is-3">PortfolioGallery</h2>
                    <InfiniteScroll scrollItems={images} batchItemsTwo={newImageBatch} />
                </div>
            </div>

            // <div className="columns">
            //     <div className="column is-4">
            //         <div>
            //             <figure><img src={TestImage1} alt=" " /></figure>
            //         </div>
            //         <div>
            //             <figure><img src={TestImage2} alt=" " /></figure>
            //         </div>
            //         <div>
            //             <figure><img src={TestImage3} alt=" " /></figure>
            //         </div>
            //         <div>
            //             <figure><img src={TestImage4} alt=" " /></figure>
            //         </div>
            //     </div>
            //     <div className="column is-4">
            //         <div>
            //             <figure><img src={TestImage5} alt=" " /></figure>
            //         </div>
            //         <div>
            //             <figure><img src={TestImage6} alt=" " /></figure>
            //         </div>
            //         <div>
            //             <figure><img src={TestImage7} alt=" " /></figure>
            //         </div>
            //         <div>
            //             <figure><img src={TestImage8} alt=" " /></figure>
            //         </div>
            //     </div>
            //     <div className="column is-4">
            //         <div>
            //             <figure><img src={TestImage9} alt=" " /></figure>
            //         </div>
            //         <div>
            //             <figure><img src={TestImage10} alt=" " /></figure>
            //         </div>
            //         <div>
            //             <figure><img src={TestImage1} alt=" " /></figure>
            //         </div>
            //         <div>
            //             <figure><img src={TestImage2} alt=" " /></figure>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default PortfolioGallery;
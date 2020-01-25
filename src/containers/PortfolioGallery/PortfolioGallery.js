import React, {Component} from 'react';

import classes from './PortfolioGallery.module.css';
import InfiniteScroll from '../../components/UI/InfiniteScroll/InfiniteScroll';

// import TestImage1 from '../../assets/images/testImages/portfolio_test1.jpg';
// import TestImage2 from '../../assets/images/testImages/portfolio_test2.jpg';
// import TestImage3 from '../../assets/images/testImages/portfolio_test3.jpg';
// import TestImage4 from '../../assets/images/testImages/portfolio_test4.jpg';
// import TestImage5 from '../../assets/images/testImages/portfolio_test5.jpg';
// import TestImage6 from '../../assets/images/testImages/portfolio_test6.jpg';
// import TestImage7 from '../../assets/images/testImages/portfolio_test7.jpg';
// import TestImage8 from '../../assets/images/testImages/portfolio_test8.jpg';
// import TestImage9 from '../../assets/images/testImages/portfolio_test9.jpg';
// import TestImage10 from '../../assets/images/testImages/portfolio_test10.jpg';

class PortfolioGallery extends Component {
    render() {
        const classList = [classes.PortfolioGallery, 'columns'];

        return (
            <div className={classList.join(' ')}>
                <div className="column">
                    <InfiniteScroll />
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
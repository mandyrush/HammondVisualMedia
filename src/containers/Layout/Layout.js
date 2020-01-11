import React, {Component} from 'react';

import classes from './Layout.module.css';
import SideMenu from '../../components/SideMenu/SideMenu';
// import Jumbotron from '../../components/Jumbotron/Jumbotron';

class Layout extends Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         alert('working');
    //     }, 3000)
    // }

    render() {
        return (
            <section className={classes.Layout}>
                <SideMenu />
                {/* <main className={classes.MainContent}>
                    Routes from props.children
                    <Jumbotron />
                </main> */}
            </section>
        );
    }
};

export default Layout;
import React, {Component} from 'react';

import SideMenu from '../../components/SideMenu/SideMenu';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

class Layout extends Component {
    render() {
        return (
            <section>
                <SideMenu />
                <main>
                    {/* Routes from props.children */}
                    <Jumbotron />
                </main>
            </section>
        );
    }
};

export default Layout;
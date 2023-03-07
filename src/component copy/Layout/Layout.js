import { Fragment } from 'react';
import Header from './Header';
import './Layout.css';
import { Outlet } from 'react-router-dom';

const Layout = (props) => {
    return(
        <Fragment>
            <Header />
            {/* <Home /> */}
            <main className='layout'>{props.children}</main>
            <Outlet />
        </Fragment>
    )
}

export default Layout;
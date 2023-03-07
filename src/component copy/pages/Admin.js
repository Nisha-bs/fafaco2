import Login from './Login';
import './Admin.css';
import { Fragment } from 'react';
import Layout from '../Layout/Layout';

const Admin = () => {
    return(
        <Fragment>
        <Layout />
        <div className='admin'>
            <h1>Admin Login</h1>
            <div className='admin-login'>
            <Login /></div>
        </div>
        </Fragment>
    )

}

export default Admin;
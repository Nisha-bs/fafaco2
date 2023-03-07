import Login from './Login';
import './Employee.css';
import { Fragment } from 'react';
import Layout from '../Layout/Layout';

const Employee = () => {
    return(
        <Fragment>
        <Layout />
        <div className='staff'>
            <h1>Employee Login</h1>
            <div className='staff-login'>
                <Login />
                <span>Doesn't have an account? </span>
                <a href="/signup">Sign Up</a>
            </div>
        </div>
        </Fragment>
    )

}

export default Employee;
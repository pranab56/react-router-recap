import React from 'react';
import { Link } from 'react-router-dom';
import './Heder.css'

const Heder = () => {
    return (
        <div>
            <h2>welcome to our t-shirt home</h2>
            <nav className='navber'>
                <Link to={'/home'}>Home</Link>
                <Link to={'/orderreview'}>OrderReview</Link>
                <Link to={'/grandpa'}>GrandPa</Link>
            </nav>
        </div>
    );
};

export default Heder;
import React, { useContext } from 'react';
import { RingContaxt } from '../GrandPa/Grandpa';


const Uncle = ({house}) => {
    const ring=useContext(RingContaxt)
    return (
        <div>
            <h3>Uncle</h3>
            <p>house : {house}</p>
            <p>ring : {ring}</p>

        </div>
    );
};

export default Uncle;
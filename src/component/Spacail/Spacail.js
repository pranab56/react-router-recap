import React, { useContext } from 'react';
import { RingContaxt } from '../GrandPa/Grandpa';

const Spacail = () => {
    const ring=useContext(RingContaxt)
    return (
        <div>
            <h3>Spacail</h3>
            <p>gift : {ring}</p>
        </div>
    );
};

export default Spacail;
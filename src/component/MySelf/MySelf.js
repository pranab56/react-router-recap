import React from 'react';

import Spacail from '../Spacail/Spacail';

const MySelf = ({house}) => {
    
    return (
        <div>
            <h3>my self</h3>
            <p>house : {house}</p>
            <Spacail></Spacail>
        </div>
    );
};

export default MySelf;
import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';
import './Father.css'

const Father = ({house,gold}) => {
    
    return (
        <div>
            <h2>Father</h2>
            <p>house : {house}</p>
            <div className='father'>
            <MySelf house={house} gold={gold}></MySelf>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;
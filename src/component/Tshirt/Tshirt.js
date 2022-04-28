import React from 'react';
import './Tshirt.css'
const Tshirt = (props) => {
    const {handleToAddTshirt,tshirt}=props;
    const {picture,name,price,}=tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>price : ${price}</p>
            <button onClick={()=>handleToAddTshirt(tshirt)} className='addtocartbutton'>AddToCart</button>
        </div>
    );
};

export default Tshirt;
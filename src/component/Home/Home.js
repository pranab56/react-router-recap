import React, {  useState } from 'react';
import './Home.css'
import UseTshirt from '../../Hooks/UseTshirt/UseTshirt';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const [tshirts,settshirt]=UseTshirt()
    const [cart,setcart]=useState([])
    const handleToAddTshirt=(sellectedItam)=>{
      
    
        const singleItam=cart.find(tshirt=>tshirt._id === sellectedItam._id);
        if(!singleItam){
            const newItam=[...cart,sellectedItam];
            setcart(newItam)
        }
        else{
            alert('already adeddd')
        } 
    }
    const HandleToRemoveCart=(sellectedItam)=>{
       const rest=cart.filter(tshirt=>tshirt._id !== sellectedItam._id);
       setcart(rest)
    }
    
    return (
        <div className='home-container'>
            <div className="tshirt-container">
            {
                tshirts.map(tshirt=><Tshirt
                key={tshirt._id}
                tshirt={tshirt}
                handleToAddTshirt={handleToAddTshirt}
                ></Tshirt>)
            }
            </div>
            <div className="cart-container">
            <Cart 
            key={cart._id}
            cart={cart}
            HandleToRemoveCart={HandleToRemoveCart}
            ></Cart>
            </div>
        </div>
    );
};

export default Home;
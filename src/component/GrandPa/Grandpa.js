import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Unty from '../Unty/Unty';
import './GrandPa.css'


 export const RingContaxt=createContext('ring');
const Grandpa = () => {
    const [house,sethouse]=useState(1)
    

    
    const handleBuyHouse=()=>{
        const buyHouse=house+1;
        sethouse(buyHouse)
    }
    const gold='matir nekless';
    
    return (
        
            <RingContaxt.Provider value={gold}>
                 <div className='GrandPa'>
            
            <h3>GrandPa</h3>
            <p>house : {house}</p>
            <button onClick={handleBuyHouse}>Buy a house</button>
               <section style={{display:'flex'}}>
                    
                <Father house={house} gold={gold}></Father>
                <Uncle house={house}></Uncle>
                <Unty house={house}></Unty>
               </section>
                
            </div>
            </RingContaxt.Provider>
        
    
    );
};

export default Grandpa;
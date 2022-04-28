import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const {HandleToRemoveCart,cart}=props;
    let command;
    if(cart.length===0){
        command=<p>plz at lest one itam add !!!</p>
    }
    else if(cart.length ===1){
        command=<p>plz more itam add....</p>
    }
    else{
        command=<p>thanks for adding</p>
    }

    return (
        <div>
          <h3>all tshirt calculate : 
              {cart.length}</h3>
          
        {
            cart.map(tshirt=><p>{tshirt.name}
            <button onClick={()=>HandleToRemoveCart(tshirt)}>X</button>
            </p>)
        }
        {
            cart.length ===3 && <div className='orange'>
                <h4>dpi</h4>
                <p>tshirt price onek</p>

            </div>
        }
        {command}
        {
            cart.length !== 4 ? <p>plz kip adding</p>:<button>Remove itam</button>
        }
          
        </div>
    );
};

export default Cart;
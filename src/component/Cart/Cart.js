import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart);
    return (
        <div className='cart-container'>
            <p>profile</p>
            <p>length: {cart.length}</p>
        </div>
    );
};

export default Cart;
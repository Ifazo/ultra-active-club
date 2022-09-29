import React, { useState } from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart);
    const [count, setCount] = useState(0);

    let total = 0;
    for (const product of cart) {
        total = total + product.time;
    }

    return (
        <div className='cart-container'>
            <h4>Ziaul Karim</h4>
            <p>Chittagong, Bangladesh</p>
            <div>
                <p>weight: 60KG</p>
                <p>Height: 5.10 inches</p>
                <p>Age: 23 Years</p>
            </div>
            <div className='break'>
        <h2>Add a Break</h2>
    <div className='box'>
        <button onClick={() => setCount(15)}>15s</button>
        <button onClick={() => setCount(30)}>30s</button>
        <button onClick={() => setCount(45)}>45s</button>
        <button onClick={() => setCount(60)}>60s</button>
    </div>
    </div>
            <div>
                <h2>Exercise Details</h2>
                <h3>Exercise Time: {total} seconds</h3>
                <h3>Break Time: {count} seconds</h3>
            </div>
            <button>Activity Completed</button>
        </div>
    );
};

export default Cart;
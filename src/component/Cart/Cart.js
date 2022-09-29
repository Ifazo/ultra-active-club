import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart);

    let total = 0;
    let time = 0;
    for (const product of cart) {
        total = total + product.time;
        time = product.time;
    }

    return (
        <div className='cart-container'>
            <img src="" alt="profile" />
            <h4>Ziaul Karim</h4>
            <p>Chittagong, Bangladesh</p>
            <div>
                <p>weight: 60KG</p>
                <p>Height: 5.10 inches</p>
                <p>Age: 23 Years</p>
            </div>
            <div>
                <h2>Add a Break</h2>
                <p><span>10s</span>  <span>20s</span>  <span>30s</span>  <span>40s</span>  <span>50s</span>  <span>60s</span></p>
            </div>
            <div>
                <h2>Exercise Details</h2>
                <h6>Exercise Time: {total} seconds</h6>
                <h6>Break Time: {time}</h6>
            </div>
            <button>Activity Completed</button>
        </div>
    );
};

export default Cart;
import React from 'react';
import './Card.css';

const Card = (props) => {
    const { data, handleClick } = props;
    const { link, tittle, time, details } = data;
    return (
        <div className='card'>
        <div className='card-container'>
            <div>
            <img src={link} alt="img" />
            <h3>{tittle}</h3>
            <h6>TIme: {time}</h6>
            <p>Description: {details}</p>
            <button onClick={() => handleClick(data)}>Add to Cart</button>
            </div>
        </div>
        <div className='cart-container'>
            <h3>User Profile</h3>
        </div>
        </div>
    );
};

export default Card;
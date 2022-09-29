import React from 'react';
import './Product.css'

const Product = ({product, handleClick}) => {
    const {tittle, time, link, details} =product;
    // console.log(product);

    return (
        <div className='product'>
            <img src={link} alt="img" />
            <h3>Title: {tittle}</h3>
            <h6>Time: {time}</h6>
            <p>Details: {details}</p>
            <button onClick={() => handleClick(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;
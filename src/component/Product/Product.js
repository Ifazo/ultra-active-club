import React from 'react';
import './Product.css'

const Product = ({product, handleClick}) => {
    const {tittle, time, link, details} =product;
    // console.log(product);

    return (
        <div className='product'>
            <img src={link} alt="img" />
            <h2>Title: {tittle}</h2>
            <h4>Time: {time}</h4>
            <h6>Details: {details}</h6>
            <button onClick={() => handleClick(product)}>Add to List</button>
        </div>
    );
};

export default Product;
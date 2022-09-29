import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const handleClick = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='home'>
            <div className='card-container'>
            <h1>FITNESS CLUB</h1>
            <p>length:{products.length}</p>
            <div className='products'>
            {
                products.map(product => <Product product={product} key={product.id} handleClick={handleClick}></Product>)
            }
            </div>
            </div>
            <div>
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;
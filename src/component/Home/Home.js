import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../Utilities/fakeDB';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const handleClick = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getStoredCart();
        // console.log(storedCart);
        for (const id in storedCart) {
                // console.log(id);
                const addedProduct = products.find(product => product.id === id);
                console.log(addedProduct);
            }
        }, [])

    return (
        <div className='home'>
            <div className='card-container'>
            <h1>FITNESS CLUB</h1>
            <div className='products'>
            {
                products.map(product => <Product product={product} 
                    key={product.id} 
                    handleClick={handleClick}
                    ></Product>)
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
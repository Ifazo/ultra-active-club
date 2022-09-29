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
        // const savedCart = [];
        for (const id in storedCart) {
                console.log(id);
                // const addedProduct = products.find(product => product.id === id);
                // savedCart.push(addedProduct);
            }
            // setCart(savedCart);
        }, [products])

    return (
        <div className='home'>
            <div className='card-container'>
            <div className='products'>
            {
                products.map(product => <Product product={product} 
                    key={product.id} 
                    handleClick={handleClick}
                    ></Product>)
            }
            </div>
            </div>
            <div className='cart-container'>
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;
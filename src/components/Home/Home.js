import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Home = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, []);

    const handleClick = (data) => {
        // console.log(data);
        const newCart = [...cart, data];
        setCart(newCart);
    }

    return (
        <div>
            <h1>FITNESS CLUB</h1>
            <div>
                {
                data.map(data => <Card data={data} key={data.id} handleClick={handleClick}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;
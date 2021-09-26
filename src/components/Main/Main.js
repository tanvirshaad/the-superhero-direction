import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import Cart from '../Cart/Cart';
import './Main.css';

const Main = () => {
    const [actors, setActors] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./api.JSON')
            .then((res) => res.json())
            .then((data) => setActors(data));
    }, []);
    const handleAddPlayer = (actor) => {
        const newCart = [...cart, actor];
        setCart(newCart);
    };
    return (
        <div className="row mt-5">
            <div className="actor-container col-lg-9">
                <div className="grid-layout">
                    {actors.map((actor) => (
                        <Actor
                            actor={actor}
                            key={actor.salary}
                            handleAddPlayer={handleAddPlayer}
                        ></Actor>
                    ))}
                </div>
            </div>
            <div className="cart-container col-lg-3 text-center">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;

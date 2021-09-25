import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import './Main.css';

const Main = () => {
    const [actors, setActors] = useState([]);
    useEffect(() => {
        fetch('./api.JSON')
            .then((res) => res.json())
            .then((data) => setActors(data));
    }, []);
    return (
        <div className="row mt-5">
            <div className="actor-container col-lg-9">
                <div className="grid-layout">
                    {actors.map((actor) => (
                        <Actor actor={actor} key={actor.salary}></Actor>
                    ))}
                </div>
            </div>
            <div className="cart-container col-lg-3">
                <h3>Cart</h3>
            </div>
        </div>
    );
};

export default Main;

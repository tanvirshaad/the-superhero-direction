import React from 'react';
import './Actor.css';

const Actor = (props) => {
    const { name, img, age, known_for, country, salary } = props.actor;
    return (
        <div className="">
            <div className="card">
                <img
                    src={img}
                    className="card-img-top img-fluid img-thumbnail"
                    alt=""
                />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                    </p>
                </div>
                <div className="card-footer">
                    <button className="btn-info">Pick</button>
                </div>
            </div>
        </div>
    );
};

export default Actor;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import './Actor.css';

const Actor = (props) => {
    // console.log(props);
    const { name, img, age, known_for, country, salary } = props.actor;
    return (
        <div className="">
            <div className="card fix-height mt-3">
                <img
                    src={img}
                    className="card-img-top img-thumbnail img-height"
                    alt=""
                />
                <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{name}</h5>
                    <p className="card-text">
                        <p>Age: {age}</p>
                        <p>Country: {country}</p>
                        <p>Known For: {known_for}</p>
                        <p>Salary: {salary}</p>
                    </p>
                </div>
                <div className="card-footer text-center">
                    <button
                        onClick={() => props.handleAddPlayer(props.actor)}
                        className="btn-pick border-0 rounded px-5 py-2"
                    >
                        <FontAwesomeIcon icon={faHandsHelping} /> Pick
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Actor;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    //destructuring
    const { cart } = props;
    //calculating total
    let total = 0;
    for (const actor of cart) {
        total = total + actor.salary;
    }
    return (
        <div className="cart rounded-3">
            <h2 className="cart-title rounded">
                {<FontAwesomeIcon icon={faUsers} />}
            </h2>
            <h5 className="">
                Actor Added:{' '}
                <span className="actor-count">{props.cart.length}</span>
            </h5>
            <h4>
                Total: $<span className="total-count">{total}</span>
            </h4>

            <h4>Added:</h4>
            {cart.map((item) => (
                <li className="added-actor">{item.name}</li>
            ))}
        </div>
    );
};

export default Cart;

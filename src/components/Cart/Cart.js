import React from 'react';
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
            <h2 className="cart-title rounded">Cart</h2>
            <h5 className="">
                Actor Added:{' '}
                <span className="actor-count">{props.cart.length}</span>
            </h5>
            <h4>
                Total: $<span className="total-count">{total}</span>
            </h4>
            <p>
                {' '}
                <h4>Added:</h4>
                {cart.map((item) => (
                    <li className="added-actor">{item.name}</li>
                ))}
            </p>
        </div>
    );
};

export default Cart;

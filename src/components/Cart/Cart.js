import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let total = 0;
    for (const actor of cart) {
        total = total + actor.salary;
    }
    return (
        <div>
            <h2>Cart</h2>
            <h5>Player Added: {props.cart.length}</h5>
            <h4>Total: {total}</h4>
        </div>
    );
};

export default Cart;

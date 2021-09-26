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
        <div className="cart rounded-3">
            <h2 className="cart-title rounded">Cart</h2>
            <h5 className="">
                Actor Added:{' '}
                <span className="actor-count">{props.cart.length}</span>
            </h5>
            <h4>
                Total: <span className="total-count">{total}</span>
            </h4>
        </div>
    );
};

export default Cart;

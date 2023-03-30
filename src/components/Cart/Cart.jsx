import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    // const cart = props.cart;  // option - 1
    const {cart} = props;  // option - 2

    let totalPrice = 0;
    for (const product of cart) {
        totalPrice += product.price;
    }

    return (
        <div className="cart">
            <h4 className="cart-title">Oder Summery</h4>
            <div className="cart-information">
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: $</p>
                <p>Tax: $</p>
                <h4>Grand Total: $</h4>
            </div>
        </div>
    );
};

export default Cart;

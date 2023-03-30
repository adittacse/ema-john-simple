import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    // const cart = props.cart;  // option - 1
    const {cart} = props;  // option - 2

    let totalPrice = 0;
    let totalShipping = 0;

    for (const product of cart) {
        totalPrice += product.price;
        totalShipping += product.shipping;
    }

    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className="cart">
            <h4 className="cart-title">Oder Summery</h4>
            <div className="cart-information">
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            </div>
        </div>
    );
};

export default Cart;

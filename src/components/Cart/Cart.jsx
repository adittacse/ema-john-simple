import React from 'react';
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, handleClearCart}) => {
    // const cart = props.cart;  // option - 1
    // const {cart} = props;  // option - 2

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart) {
        // product.quantity = product.quantity || 1;
        if (product.quantity === 0) {
            product.quantity = 1;
        }
        totalPrice += product.price * product.quantity;
        totalShipping += product.shipping;
        quantity += product.quantity;
    }

    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className="cart">
            <h4 className="cart-title">Order Summery</h4>
            <div className="cart-information">
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
                <button onClick={handleClearCart} className="btn-clear-cart">
                    <span>Clear Cart</span> <FontAwesomeIcon className="" icon={ faTrashAlt } />
                </button>
            </div>
        </div>
    );
};

export default Cart;

import React from 'react';
import Cart from "../Cart/Cart.jsx";
import {useLoaderData} from "react-router-dom";
import ReviewItems from "../ReviewItem/ReviewItem.jsx";
import "./Order.css";

const Orders = () => {
    const cart = useLoaderData();

    return (
        <div className="shop-container">
            <div className="review-container">
                {
                    cart.map(product => <ReviewItems key={product.id}
                                                     product={product}></ReviewItems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;

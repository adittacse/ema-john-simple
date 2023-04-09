import React, {useState} from 'react';
import Cart from "../Cart/Cart.jsx";
import {useLoaderData} from "react-router-dom";
import ReviewItems from "../ReviewItem/ReviewItem.jsx";
import "./Order.css";
import {deleteShoppingCart, removeFromDb} from "../../utilities/fakedb.js";

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className="shop-container">
            <div className="review-container">
                {
                    cart.map(product => <ReviewItems key={product.id}
                                                     product={product}
                                                     handleRemoveFromCart={handleRemoveFromCart}>
                    </ReviewItems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
            </div>
        </div>
    );
};

export default Orders;

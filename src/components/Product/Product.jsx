import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className="product">
            <img src={img} alt="shoe image"/>
            <div className="product-information">
                <h6 className="product-title">{name}</h6>
                <h4>Price: ${price}</h4>
                <p className="manufacture">Manufacture: {seller}</p>
                <p className="rating">Rating: {ratings} star</p>
            </div>
            <div>
                <button onClick={() => handleAddToCart(props.product)}
                        className="btn-add-to-cart">Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
        </div>
    );
};

export default Product;

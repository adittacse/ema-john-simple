import React from 'react';
import "./Product.css";

const Product = (props) => {
    const {img, name, price, seller, quantity, ratings} = props.product;
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
                <button className="btn-add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;

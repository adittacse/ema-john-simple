import React from 'react';
import "./Product.css";

const Product = (props) => {
    const {img, name, price, seller, quantity, ratings} = props.product;
    return (
        <div className="product">
            <img src={img} alt="shoe image"/>
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <p>Manufacture: {seller}</p>
            <p>Ratings: {ratings} star</p>
        </div>
    );
};

export default Product;

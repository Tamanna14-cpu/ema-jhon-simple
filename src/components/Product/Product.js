import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>By : {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick = {() => props.HandleAddProduct(props.product)} className = 'main-button'>
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;
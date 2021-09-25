import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const Product = (props) => {
    const { img, name, seller, price, stock, key, star } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h4 className='product-name'><Link to={'/product/' + key}>{name}</Link></h4>
                <br />
                <p><small>By : {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>

                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                >
                </Rating>
                <br />

                {props.showAddToCart &&
                    <button onClick={() => props.HandleAddProduct(props.product)} className='main-button'>
                        <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                    </button>
                }
            </div>
        </div>
    );
};

export default Product;
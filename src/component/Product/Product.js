import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {handleAddToCart}=props;
    const {name,img,ratings,seller,price}=props.product;

   
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>price:${price}</p>
            <p><small>Manufacture:{seller}</small></p>
            <p><small>Rating:{ratings}</small></p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [cart,setCart]=useState([]);
    

    const [products,setProduct]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);

    const handleAddToCart=(product)=>{
        console.log('clicked');
        const newCart=[...cart,product];
        setCart(newCart);
    }
    
    return (
        <div className='shop-container'>
            <div className="product-container">
               {
                products.map(product=><Product 
                    key={product.key}
                    product={product}
                    handleAddToCart={handleAddToCart}
                ></Product>)
               }
            </div>
            <div className="cart-container">
                <h4>Order Summery</h4>
                <p>Selected item:{cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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
        const newCart=[...cart,product];
        setCart(newCart);
        addToDb(product.id);
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
                <Cart cart={cart}></Cart>
              
            </div>
            
        </div>
    );
};

export default Shop;
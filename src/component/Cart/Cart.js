import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart}=props;
    let total=0;
    let shipping=0;
    for(const product of cart){
        total= total+product.price;
        shipping=shipping+product.shipping;
    }
    let tax=+(total*0.1).toFixed(2);
    let grandTotal=total+shipping+tax;

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected item:{cart.length}</p> 
            <p>Total Price :${total}</p>
            <p>Total Shipping Charge:${shipping}</p>
            <p>Tax:${tax}</p>
            <h3>Grant Total:${grandTotal}</h3>
        </div>
    );
};

export default Cart;
import React from 'react';
import { useCart } from './CartContextProvider';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    return (
        <div className="cart-container">  { }
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>Price: ${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <div>
                                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Link to="/checkout" className="checkout-btn">
                        Proceed to Checkout
                    </Link>
                </>
            )}
        </div>
    );
};

export default Cart;

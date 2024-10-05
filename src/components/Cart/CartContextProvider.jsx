import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);  // Inicializa `cart` como un array vacío

    const addToCart = (item, quantity) => {
        setCart(prevCart => {
            const itemInCart = prevCart.find(cartItem => cartItem.id === item.id);

            if (itemInCart) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const increaseQuantity = (id) => {
        setCart(prevCart =>
            prevCart.map(cartItem =>
                cartItem.id === id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCart(prevCart =>
            prevCart.map(cartItem =>
                cartItem.id === id && cartItem.quantity > 1
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            )
        );
    };

    // Agrega la función clearCart
    const clearCart = () => {
        setCart([]);  // Vacía el carrito
    };

    const totalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

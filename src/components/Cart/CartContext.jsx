import { createContext, useState, useContext } from 'react';

const CartContext = createContext();


export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addToCart = (item, quantity = 1) => {
        setCart((prevCart) => {
            const itemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);

            if (itemIndex !== -1) {

                const updatedCart = [...prevCart];
                updatedCart[itemIndex].quantity += quantity;
                return updatedCart;
            } else {

                return [...prevCart, { ...item, quantity }];
            }
        });
    };


    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    };


    const increaseQuantity = (itemId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };


    const decreaseQuantity = (itemId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

import React, { useContext } from 'react';
import { CartContext } from './Cart/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart">
            <div>
                🛒
                <span>{getTotalQuantity()}</span>
            </div>
        </Link>
    );
};

export default CartWidget;

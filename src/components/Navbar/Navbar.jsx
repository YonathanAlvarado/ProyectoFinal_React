import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Cart/CartContextProvider';
import './Navbar.css';

const Navbar = () => {
    const { cart } = useCart();


    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/" className="active">All Games</Link></li>
                <li><Link to="/ps4">PS4</Link></li>
                <li><Link to="/xbox">Xbox</Link></li>
                <li><Link to="/steam">Steam</Link></li>
                <li>
                    <Link to="/cart" className="cart-link">
                        Cart
                        {totalItems > 0 && (
                            <span className="cart-count">{totalItems}</span>
                        )}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

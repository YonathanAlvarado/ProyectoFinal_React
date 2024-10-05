import React from 'react';
import { Link } from 'react-router-dom';
import './OrderConfirmation.css';  // Importa el CSS

const OrderConfirmation = () => {
    return (
        <div className="order-confirmation-container">
            <h2>Order Processed Successfully!</h2>
            <p>Thank you for your purchase. Your order has been successfully processed.</p>
            <p>You will receive a confirmation email shortly.</p>
            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default OrderConfirmation;

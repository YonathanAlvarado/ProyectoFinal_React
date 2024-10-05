import React, { useState } from 'react';
import { useCart } from '../Cart/CartContextProvider';
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';  // Importamos el archivo CSS

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        region: ''
    });

    const navigate = useNavigate(); // Asegúrate de usar este hook correctamente

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const order = {
            customer: formData,
            items: cart,
            total: totalPrice(),
            date: new Date().toISOString()
        };

        try {
            console.log("About to send order:", order); // Log para verificar la orden
            const docRef = await addDoc(collection(db, 'orders'), order);  // Añadimos la orden a Firebase
            console.log('Order written with ID: ', docRef.id);

            clearCart();  // Limpiar carrito
            console.log("Cart cleared");

            navigate('/order-confirmation');  // Navega a la página de confirmación de la orden
            console.log("Navigating to order confirmation");
        } catch (error) {
            console.error('Error adding document: ', error.message); // Agregamos más detalles sobre el error
            alert(`Error placing order: ${error.message}`);  // Alerta en caso de error
        }
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Region</label>
                    <input
                        type="text"
                        name="region"
                        value={formData.region}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Place Order</button>
            </form>

            <div className="order-summary">
                <h3>Order Summary</h3>
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.title} - Quantity: {item.quantity} - Price: ${item.price}
                        </li>
                    ))}
                </ul>
                <h4>Total Price: ${totalPrice()}</h4>
            </div>
        </div>
    );
};

export default Checkout;

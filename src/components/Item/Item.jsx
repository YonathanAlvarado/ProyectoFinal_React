import React, { useState } from 'react';
import { useCart } from '../Cart/CartContextProvider';
import './Item.css';

const Item = ({ item }) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="card">
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="price">${item.price}</p>

            <div className="card-actions">
                <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                />
                <button onClick={() => addToCart(item, quantity)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Item;
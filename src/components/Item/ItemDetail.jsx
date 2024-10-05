import React, { useState } from 'react';
import { useCart } from '../Cart/CartContextProvider';
import './ItemDetail.css';

const ItemDetail = ({ id, title, imageUrl, price, description }) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart({ id, title, price }, quantity);
    };

    return (
        <div className="item-detail card"> { }
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p className="price">${price}</p>
            <div className="card-actions">
                <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                />
                <button onClick={handleAddToCart}>Add to Cart</button> { }
            </div>
        </div>
    );
};

export default ItemDetail;

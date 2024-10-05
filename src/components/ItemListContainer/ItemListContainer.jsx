import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { getDocs, collection } from 'firebase/firestore';
import ItemDetail from '../Item/ItemDetail';
import './ItemListContainer.css';

const ItemListContainer = ({ platform }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                let allItems = [];
                if (platform === 'all') {
                    const ps4Items = await getDocs(collection(db, 'Ps4'));
                    const xboxItems = await getDocs(collection(db, 'Xbox'));
                    const steamItems = await getDocs(collection(db, 'Steam'));

                    allItems = [
                        ...ps4Items.docs.map(doc => ({ id: doc.id, ...doc.data() })),
                        ...xboxItems.docs.map(doc => ({ id: doc.id, ...doc.data() })),
                        ...steamItems.docs.map(doc => ({ id: doc.id, ...doc.data() })),
                    ];
                } else {
                    const querySnapshot = await getDocs(collection(db, platform));
                    allItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                }

                setItems(allItems);
            } catch (error) {
                console.error('Error fetching items: ', error);
            }
        };

        fetchItems();
    }, [platform]);

    return (
        <div className="item-list-container">
            <h1>{platform === 'all' ? 'All Games' : `${platform} Games`}</h1>
            <div className="item-list">
                {items.map(item => (
                    <ItemDetail
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        imageUrl={item.imageUrl}
                        price={item.price}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;

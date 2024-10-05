import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../Item/ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemDoc = doc(db, 'Steam', id);

        getDoc(itemDoc).then((docSnap) => {
            if (docSnap.exists()) {
                setItem({ id: docSnap.id, ...docSnap.data() });
            }
        });
    }, [id]);

    return item ? <ItemDetail item={item} /> : <p>Loading...</p>;
};

export default ItemDetailContainer;

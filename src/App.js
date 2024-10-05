import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation'; // Importa el componente de confirmación
import { CartContextProvider } from './components/Cart/CartContextProvider';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer platform="all" />} />
          <Route path="/ps4" element={<ItemListContainer platform="Ps4" />} />
          <Route path="/xbox" element={<ItemListContainer platform="Xbox" />} />
          <Route path="/steam" element={<ItemListContainer platform="Steam" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} /> {/* Ruta para confirmación */}
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

# E-Commerce de Videojuegos

Este es un proyecto de e-commerce para la venta de videojuegos, desarrollado con **React** y conectado a **Firebase** para la gestión de productos y pedidos. Los usuarios pueden navegar entre diferentes secciones de videojuegos y realizar compras simuladas, con la información almacenada en Firebase Firestore.

## Características del Proyecto

- Catálogo de Videojuegos: Los videojuegos están categorizados en diferentes plataformas como **PS4**, **Xbox**, y **Steam**.
- Añadir al carrito: Los usuarios pueden seleccionar la cantidad de juegos y añadirlos al carrito de compras.
- Resumen del carrito: El carrito muestra la lista de juegos seleccionados con la opción de ajustar la cantidad.
- Checkout: Los usuarios pueden proceder al checkout e ingresar sus datos de contacto y envío.
- Confirmación de Orden: Una vez que se realiza la compra, se almacena en Firebase y el usuario es dirigido a una página de confirmación.

## Tecnologías Utilizadas

- **React**: Framework principal para la construcción del front-end.
- **Firebase Firestore**: Base de datos NoSQL para almacenar y gestionar los productos y órdenes.
- **React Router**: Para gestionar las rutas y la navegación entre páginas.
- **CSS**: Estilos personalizados para mejorar la apariencia de la aplicación.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```bash
src/
│
├── components/
│   ├── Cart/
│   │   ├── Cart.jsx
│   │   ├── CartContextProvider.jsx
│   │   └── CartWidget.jsx
│   ├── Checkout/
│   │   ├── Checkout.jsx
│   ├── Item/
│   │   ├── Item.jsx
│   │   ├── ItemDetail.jsx
│   │   ├── ItemList.jsx
│   ├── ItemDetailContainer/
│   │   ├── ItemDetailContainer.jsx
│   ├── ItemListContainer/
│   │   ├── ItemListContainer.jsx
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   └── OrderConfirmation/
│       └── OrderConfirmation.jsx
├── firebase/
│   └── firebaseConfig.js
├── App.js
└── index.js
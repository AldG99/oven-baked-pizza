import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Estilos globales de la aplicación.
import Layout from './components/layout'; // Componente de diseño global.
import About from './components/about'; // Página de "Acerca de".
import Featured from './components/featured'; // Componente destacado para promociones o elementos destacados.
import PizzaList from './components/pizzaList'; // Lista de pizzas disponibles.
import Product from './components/product/product'; // Detalle de un producto específico.
import Cart from './components/cart/cart'; // Carrito de compras.
import Order from './components/orders/order'; // Página de pedidos.
import Login from './components/admin/login'; // Página de inicio de sesión para administradores.
import store from './redux/store'; // Configuración del store de Redux.
import Admin from './components/admin/index'; // Panel de administración.
import Add from './components/add'; // Formulario para añadir un nuevo producto.
import { Provider } from 'react-redux'; // Proveedor para conectar Redux con la aplicación.
import AddButton from './components/addButton'; // Botón para abrir el formulario de añadir producto.

export default function App({ pizzaList, admin }) {
  const [close, setClose] = useState(true); // Estado para controlar si el formulario de añadir producto está cerrado.

  return (
    <Provider store={store}>
      {/* Proporciona el store de Redux a toda la aplicación. */}
      <Router>
        {/* Habilita el enrutamiento para la aplicación. */}
        <Layout>
          {/* Componente de diseño que envuelve el contenido. */}
          <Routes>
            {/* Define las rutas de la aplicación. */}
            <Route
              path="/"
              element={
                <>
                  <Featured /> {/* Muestra elementos destacados. */}
                  {admin && <AddButton setClose={setClose} />}
                  {/* Botón de añadir visible solo para administradores. */}
                  <PizzaList pizzaList={pizzaList} />
                  {/* Lista de pizzas disponibles. */}
                  {!close && <Add setClose={setClose} />}
                  {/* Formulario para añadir producto si `close` es `false`. */}
                </>
              }
            />
            <Route path="/about" element={<About />} />
            {/* Página de "Acerca de". */}
            <Route path="/product/:id" element={<Product />} />
            {/* Detalle de un producto específico. */}
            <Route path="/orders/:id" element={<Order />} />
            {/* Página de detalle de un pedido específico. */}
            <Route path="/cart" element={<Cart />} />
            {/* Página del carrito de compras. */}
            <Route path="/admin/login" element={<Login />} />
            {/* Página de inicio de sesión para administradores. */}
            <Route path="/admin" element={<Admin />} />
            {/* Panel de administración. */}
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

// Función para obtener datos del lado del servidor.
export const getServerSideProps = async ctx => {
  try {
    const myCookie = ctx?.req?.cookies || ''; // Obtiene las cookies de la solicitud.
    let admin = false; // Variable para verificar si el usuario es administrador.

    if (myCookie.token === process.env.TOKEN) {
      // Verifica si el token en las cookies es válido.
      admin = true;
    }

    const res = await axios.get('http://localhost:3000/api/products'); // Obtiene la lista de productos (pizzas).
    return {
      props: {
        pizzaList: res.data, // Lista de pizzas obtenida de la API.
        admin, // Indica si el usuario es administrador.
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error); // Manejo de errores: imprime el error en la consola.
    return {
      props: {
        pizzaList: [], // En caso de error, devuelve una lista vacía.
        admin: false, // Asume que el usuario no es administrador.
      },
    };
  }
};

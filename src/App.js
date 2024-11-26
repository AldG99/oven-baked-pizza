import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import About from './components/about';
import Featured from './components/featured';
import PizzaList from './components/pizzaList';
import Product from './components/product/product';
import Cart from './components/cart/cart';
import Order from './components/orders/order';
import Login from './components/admin/login';
import store from './redux/store';
import Admin from './components/admin/index';
import Add from './components/add';
import { Provider } from 'react-redux';
import AddButton from './components/addButton';

export default function App({ pizzaList, admin }) {
  // Eliminados los asteriscos
  const [close, setClose] = useState(true);

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Featured />
                  {admin && <AddButton setClose={setClose} />}
                  <PizzaList pizzaList={pizzaList} />
                  {!close && <Add setClose={setClose} />}
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/orders/:id" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export const getServerSideProps = async ctx => {
  // Eliminados los asteriscos
  try {
    const myCookie = ctx?.req?.cookies || '';
    let admin = false;

    if (myCookie.token === process.env.TOKEN) {
      admin = true;
    }

    const res = await axios.get('http://localhost:3000/api/products');
    return {
      props: {
        pizzaList: res.data,
        admin,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        pizzaList: [],
        admin: false,
      },
    };
  }
};

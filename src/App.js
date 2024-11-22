import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import About from './components/about';
import Featured from './components/featured';
import PizzaList from './components/pizzaList';
import Product from './components/product/[id]';
import Cart from './components/cart/cart';
import Order from './components/orders/[id]';
import store from './redux/store';
import Admin from './components/admin/index';
import { Provider } from 'react-redux';

export default function App() {
  const [pizzaList, setPizzaList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/products');
        setPizzaList(res.data);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Featured />
                  <PizzaList pizzaList={pizzaList} />{' '}
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/orders/:id" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Layout>
      </Provider>
    </Router>
  );
}

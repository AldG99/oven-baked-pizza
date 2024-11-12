import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import About from './components/about';
import Featured from './components/featured';
import PizzaList from './components/pizzaList';
import Product from './components/product/[id]';
import Cart from './components/cart/cart';
import Order from './components/orders/[id]';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Featured />
                <PizzaList />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/orders/:id" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

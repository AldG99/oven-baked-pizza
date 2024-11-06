import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import About from './components/about';
import Featured from './components/featured';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Featured />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

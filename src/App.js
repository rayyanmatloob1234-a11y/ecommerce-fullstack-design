import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <Toaster
  position="top-right"
  toastOptions={{
    duration: 3000,
    success: {
      style: {
        background: '#22c55e',
        color: '#fff',
        borderRadius: '16px',
        padding: '14px 18px',
        fontSize: '14px',
        fontWeight: '700',
        boxShadow: '0 20px 60px rgba(34,197,94,0.3)',
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#22c55e',
      },
    },
    error: {
      style: {
        background: '#ef4444',
        color: '#fff',
        borderRadius: '16px',
        padding: '14px 18px',
        fontSize: '14px',
        fontWeight: '700',
        boxShadow: '0 20px 60px rgba(239,68,68,0.3)',
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#ef4444',
      },
    },
  }}
/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
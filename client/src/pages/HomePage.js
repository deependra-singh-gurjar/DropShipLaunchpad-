import React from 'react';
import Navbar from '../components/Navbar';
import ProductForm from '../components/ProductForm';

function HomePage() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to DropShipLaunchpad</h1>
      <ProductForm />
    </div>
  );
}

export default HomePage;

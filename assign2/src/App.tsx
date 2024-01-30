import React from 'react';
import './App.css';
import Product from './Components/Product';

function App() {
  const obj = {
    productName: 'Downshifter',
    price: 1000,
    brandName: 'Nike',
    quantity: 10,
  };
  return (
    <Product
      // productName={obj.productName}
      // price={obj.price}
      // brandName={obj.brandName}
      // quantity={obj.quantity}
      obj={obj}
    />
  );
}

export default App;

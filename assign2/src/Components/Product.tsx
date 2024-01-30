import React, { useState } from 'react';
type propType = {
  obj: {
    productName: string;
    brandName: string;
    quantity: number;
    price: number;
  };
};

const Product = ({ obj }: propType) => {
  const { productName, price, quantity, brandName } = obj;
  const [quantityInCart, setQuantityInCart] = useState(quantity);
  return (
    <div>
      <ul>
        <li>
          <span>{productName}</span> |<span>{brandName}</span> |
          <span>{price}</span> |<span>{quantityInCart}</span>
        </li>
      </ul>
      <button
        onClick={() =>
          quantityInCart > 0 && setQuantityInCart(quantityInCart - 1)
        }
      >
        Decrement
      </button>
      <button onClick={() => setQuantityInCart(quantity)}>Reset</button>
    </div>
  );
};

export default Product;

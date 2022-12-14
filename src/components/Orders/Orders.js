import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  return (
    <div>
      <div className="products-container"></div>
      <div className="cart-container">
        <Cart carts={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;

import React from "react";

const Cart = ({ carts }) => {
  return (
    <div className="pt-7 ">
      <div>
        <h1>Order Summary</h1>
      </div>
      <div className="text-start mt-7 mx-3 space-y-3">
        <p>Selected Item : {carts.length}</p>
        <p>Total Price : </p>
        <p>Total Shipping Charge : </p>
        <p>Tax : </p>
      </div>
    </div>
  );
};

export default Cart;

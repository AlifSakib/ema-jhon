import React from "react";

const Cart = ({ carts }) => {
  console.log(carts);

  let totalPrice = 0;
  let totalShippingCost = 0;
  let quantity = 0;

  for (const product of carts) {
    quantity = product.quantity + quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShippingCost = totalShippingCost + product.shipping * product.quantity;
  }
  const tax = parseFloat((totalPrice * 0.1).toFixed(2));
  return (
    <div className="pt-7 ">
      <div>
        <h1 className="font-bold">Order Summary</h1>
      </div>
      <div className="text-start mt-7 mx-3 space-y-3">
        <p>Selected Item : {quantity}</p>
        <p>Total Price : ${totalPrice}</p>
        <p>Total Shipping Charge : ${totalShippingCost}</p>
        <p>Tax : ${tax}</p>
      </div>
      <div className="mt-10 font-bold">
        <h1>Grand Total : ${totalPrice + totalShippingCost + tax}</h1>
      </div>
    </div>
  );
};

export default Cart;

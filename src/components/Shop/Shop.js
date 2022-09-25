import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  const addToCart = (product) => {
    const newCart = [...carts, product];
    console.log(newCart);
    setCarts(newCart);
  };
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid grid-cols-4 w-9/12 mx-auto mt-10 font-quicksand">
      <div className=" grid col-span-3">
        <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              addToCart={addToCart}
            ></Product>
          ))}
        </div>
      </div>
      <div className="grid col-span-1 text-center h-10">
        <h1>Order Summary</h1>
        <p>Selected Item : {carts.length}</p>
      </div>
    </div>
  );
};

export default Shop;

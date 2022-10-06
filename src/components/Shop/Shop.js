import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addDataToLs, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const products = useLoaderData();
  const [carts, setCarts] = useState([]);
  console.log(carts);
  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exists = carts.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...carts, selectedProduct];
    } else {
      const rest = carts.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCarts(newCart);
    addDataToLs(selectedProduct.id);
  };

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCarts(savedCart);
  }, [products]);

  return (
    <div className="grid grid-cols-4 w-9/12 mx-auto mt-10 font-quicksand gap-5 h-full">
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
      <div className="grid col-span-1 text-center rounded-lg bg-orange-300 h-96 sticky top-0">
        <Cart carts={carts}></Cart>
      </div>
    </div>
  );
};

export default Shop;

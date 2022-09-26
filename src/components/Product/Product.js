import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Product = ({ addToCart, product }) => {
  const { name, price, seller, ratings, img } = product;
  return (
    <div className="h-[500px] lg:w-[300px] md:w-[240px]font-quicksand space-y-4 border rounded-lg relative">
      <img
        className="lg:w-72 md:w-[235px] h-72 rounded-lg m-1"
        src={img}
        alt=""
      />
      <div className="m-3">
        <h1>{name}</h1>
        <p>Price : {price}</p>
        <div className="mt-6">
          <p>
            <small>Manufacturer : {seller}</small>
          </p>
          <p>
            <small>Rating : {ratings}</small>
          </p>
        </div>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="absolute bottom-0 bg-orange-300 w-full rounded-b-lg p-2"
      >
        Add to Cart
        <FontAwesomeIcon
          className="mx-2"
          icon={faShoppingCart}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;

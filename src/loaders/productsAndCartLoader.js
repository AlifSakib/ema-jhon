import { getShoppingCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  //
  const savedCart = getShoppingCart();
  const initialCart = [];
  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    let quantity = savedCart[id];

    if (addedProduct) {
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
    }
  }

  return { products, initialCart };
};

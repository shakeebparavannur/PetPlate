import axios from "axios";
import React, { useState, useEffect, useReducer } from "react";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([]);
  const userId = localStorage.getItem("UserId");

  useEffect(() => {
    axios.get("http://localhost:3000/food").then((response) => {
      setProducts(response.data);
    });
    axios.get(`http://localhost:3000/user/${userId}`).then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  }, []);
  console.log(products);

  const addToCart = (productId, productName, userId, price) => {
    const cart = user.cart;
    const existingProduct = cart.find(
      (product) => product.productId === productId
    );

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({
        productId,
        productName,
        quantity: 1,
        price,
      });
    }

    axios.put(`http://localhost:3000/user/${userId}`, user);
  };

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h1>Name:{product.name}</h1>
            <h3>Price:{product.price}</h3>
            <h4>Weight:{product.quantity}</h4>
            <button
              onClick={() =>
                addToCart(product.id, product.name, userId, product.price)
              }
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllProduct;

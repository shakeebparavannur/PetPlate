import axios from "axios";
import React, { useEffect,useState } from "react";
import { Navigate } from "react-router-dom";

const useAddCart = () => {
  const [user, setUser] = useState({ cart: [] });
  const userId = localStorage.getItem("UserId");
  const login = localStorage.getItem("Login");
  const [state,setState] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:3000/user/${userId}`).then((response) => {
      console.log(response.data,);
      setUser(response.data);
    });
  },[]);
  const addToCart = (productId, productName, userId, price) => {
    if(!login){
     alert("Please login");
     return <Navigate to="/login"/>;
    }
    const cart = user.cart || [];
    const existingProduct = cart.find(
      (product) => product.productId === productId
    );

    if (!existingProduct) {
      cart.push({
        productId,
        productName,
        quantity: 1,
        price,
      });
    }

    axios.put(`http://localhost:3000/user/${userId}`, user);
    console.log(cart);
    setState(!state);

  };
  return [addToCart,state];
};
export default useAddCart;

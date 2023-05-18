import React, { useEffect, useState } from "react";
import { logginUser } from "../../App";
import axios from "axios";

const Cart = () => {
  const quantityIncrement = ((q)=> q++
  )
  const quantityDecrement = ((q)=>
    q--)
  const userId = localStorage.getItem("UserId");
  const [cart , setCart] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:3000/user/${userId}`)
    .then((response=>{setCart(response.data.cart)}))
  },[])
  console.log(cart);
  return <div>
      <h1>Cart</h1>
      {cart.map((c)=>{
        return(
          <div style={{border:"1px solid "}}>
        <h1>Name: {c.productName}</h1>
        <h4>Quantity: {c.quantity}</h4>
        <h4>price: {c.quantity*c.price}</h4>
        <button onClick={()=>{
          quantityIncrement(c.quantity)
        }}>+</button>
        <button onClick={()=>{
          quantityDecrement(c.quantity)
        }}>-</button>
          </div>
        
        )
      })}
      {console.log(cart)}
  </div>;
};

export default Cart;

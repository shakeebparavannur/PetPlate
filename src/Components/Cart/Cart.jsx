import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Container } from "react-bootstrap";

const Cart = () => {
  const userId = localStorage.getItem("UserId");
  
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${userId}`).then((response) => {
      setCart(response.data.cart);
    });
  }, []);

  const handleQuantityIncrement = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.productId === productId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleQuantityDecrement = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.productId === productId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <Container>
      <h1>Cart</h1>
      {cart.map((item) => (
        <Card key={item.productId} className="my-4">
          <Card.Body>
            <Card.Title>Name: {item.productName}</Card.Title>
            <Card.Text>
              Quantity: {item.quantity}
              <br />
              Price: {item.quantity * item.price}
            </Card.Text>
            <Button
              onClick={() => handleQuantityIncrement(item.productId)}
              variant="primary"
              className="mr-2"
            >
              +
            </Button>
            <Button
              onClick={() => handleQuantityDecrement(item.productId)}
              variant="danger"
            >
              -
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Cart;

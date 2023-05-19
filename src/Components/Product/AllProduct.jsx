import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Row , Col } from "react-bootstrap";
import useAddCart from "../useAddCart";
import CartButton from "./CartButton";
// import { MemoisedButton } from "./CartButton";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({ cart: [] });
  const [cart, setCart] = useState(true)
  const [addToCart,state] = useAddCart();
  const userId = localStorage.getItem("UserId");
  const navigate = useNavigate();
  const login = localStorage.getItem("login");
  useEffect(() => {
    axios.get("http://localhost:3000/food").then((response) => {
      setProducts(response.data);
    });
    axios.get(`http://localhost:3000/user/${userId}`).then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  }, [state]);
 const addPro =  useCallback(()=>{
    
 })

return (
    <Container>
      <Row>
      {products.map((product) => {
        const existingProduct1 = user.cart.find((p) => p.productId == product.id);
        return (
          <Col key={product.id} sm={6} md={4} lg={3} xl={2}>
          <Card  className="my-4">
            <Card.Body>
            <Card.Img variant="top" src={product.image} />
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                Price: {product.price}
                <br />
                Weight: {product.quantity}
              </Card.Text>
              
              {existingProduct1 ? <CartButton action = {()=>navigate('/cart')} name = 'Go to Cart' variant="primary" /> :<CartButton action = {()=>addToCart(product.id, product.name, userId, product.price)} name='addtocart' variant="success"/>}
            </Card.Body>
          </Card>
          </Col>
        );
      })}
            </Row>
    </Container>
  )
  
};

export default AllProduct;

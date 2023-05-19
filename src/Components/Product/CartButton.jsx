import React from 'react'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const CartButton = (props) => {
    const navigate = useNavigate();
    console.log(props);
  return (
    <div>
        <Button onClick={props.action} variant={props.variant}>{props.name}</Button>
    </div>
  )
}
export default CartButton;
// export const MemoisedButton = React.memo(CartButton)
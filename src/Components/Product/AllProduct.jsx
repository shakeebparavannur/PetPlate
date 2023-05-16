import axios from 'axios'
import React, { useState,useEffect } from 'react'

const AllProduct = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/food')
        .then((response)=>{
            setProducts(response.data);
        })
    },[])
    console.log(products);

  return (
    <div>
        {products.map((product)=>{
            return <div key={product.id}>
                <h1>Name:{product.name}</h1>
                <h3>Price:{product.price}</h3>
                <h4>Weight:{product.quantity}</h4>
                <button>Add to Cart</button>
            </div>
        })}
    </div>
  )
}

export default AllProduct
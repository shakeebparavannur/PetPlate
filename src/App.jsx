
import { createContext, useState } from 'react'
import './App.css'
import Login from './Components/userManagement/Login'
import Home from './Components/Base/Home'
import SignUp from './Components/userManagement/SignUp'
import AllProduct from './Components/Product/AllProduct'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export const ProductComponent = createContext()
function App() {
  const [product,setProduct] = useState([])
  const [user,setUser] = useState([])
  

  return (
    <>
    <BrowserRouter>
    <ProductComponent.Provider value={{product,setProduct,user,setUser}}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Login" element={<Login />}/>
        <Route path="SignUp" element={<SignUp />}/>
        <Route path="AllProduct" element={<AllProduct />}/>
      </Routes>
    </ProductComponent.Provider>
    </BrowserRouter>
      
    </>
  )
}

export default App

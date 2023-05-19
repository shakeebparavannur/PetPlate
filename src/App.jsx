import { createContext, useState } from "react";
import "./App.css";
import Login from "./Components/userManagement/Login";
import Home from "./Components/Base/Home";
import SignUp from "./Components/userManagement/SignUp";
import AllProduct from "./Components/Product/AllProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Base/Navbar";
import Cart from "./Components/Cart/Cart";
import Auth from "./Components/userManagement/Auth";

export const logginUser = localStorage.getItem("UserId");
export const login = localStorage.getItem("login");
export const logginUsername = localStorage.getItem("username");

export const ProductComponent = createContext();
function App() {
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState([]);

  return (
    <>
      <BrowserRouter>
        <ProductComponent.Provider
          value={{ product, setProduct, user, setUser }}
        >
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="AllProduct" element={<AllProduct />} />
            <Route
              path="cart"
              element={
                <Auth>
                  <Cart />
                </Auth>
              }
            />
          </Routes>
        </ProductComponent.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

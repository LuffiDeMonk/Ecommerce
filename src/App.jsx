import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Categories from "./Components/Categories/Categories";
import Homepage from "./Components/Homepage/Homepage";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Cart from "./Components/Cart/Cart";

import "./App.css";
import { fetchShopCategories } from "./Features/ShopSlice";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShopCategories());
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category/:categoryItem" element={<Categories />} />
        <Route path="/item/:productID" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;

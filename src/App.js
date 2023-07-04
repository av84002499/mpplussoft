import React from "react";
import { Navbar } from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Category/Home"
import { Registration } from "./component/Pages/Registration";
import Singleproduct from "component/Product/Product";
import Login from "component/Pages/Login";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route key="home" path='/' element={<Home />} />
        <Route key="product" path='/product' element={<Singleproduct />} />
        <Route key="register" path='/register' element={<Registration />} />
        <Route key="login" path='/login' element={<Login />} />
      </Routes>
    </>
  );
};

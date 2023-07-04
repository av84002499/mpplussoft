import React from "react";
import { Navbar } from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Getallcategories from "./component/Category/Getallcategories"
import { Registration } from "./component/Pages/Registration";
import Login from "component/Pages/Login";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route key="categories" path='/categories' element={<Getallcategories />} />
        <Route key="register" path='/register' element={<Registration />} />
        <Route key="login" path='/login' element={<Login />} />
      </Routes>
    </>
  );
};

import React from "react";
import { Navbar } from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Getallcategories from "./component/Category/Getallcategories"

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route key="categories" path='/categories' element={<Getallcategories />} />
      </Routes>
    </>
  );
};

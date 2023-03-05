import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../Pages/Home/HomePage";
import Registration from "../Pages/Registration/Registration";
import Auth from "../Pages/Auth/Auth";
import NotFound from "../Pages/404/NotFound";
import Products from "../Pages/Products/Products";
import ProductId from "../Pages/Products/ProductId/ProductId";
import Contacts from "../Pages/Home/HomeComponents/Contacts/Contacts";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductId />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};

export default RoutesApp;

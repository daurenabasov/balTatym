import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../Pages/Home/HomePage";
import Registration from "../Pages/Registration/Registration";
import Auth from "../Pages/Auth/Auth";
import NotFound from "../Pages/404/NotFound";
import Products from "../Pages/Products/Products";
import ProductId from "../Pages/Products/ProductId/ProductId";
<<<<<<< HEAD
import Basket from "../Pages/Basket/Basket";
=======
import OurHistoryPage from "../Pages/OurHistory/OurHistory.jsx";
>>>>>>> 264b289 (commit)

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductId />} />
<<<<<<< HEAD
      <Route path="/basket" element={<Basket />} />
=======
       <Route path="/our-history" element={<OurHistoryPage />} />
>>>>>>> 264b289 (commit)
    </Routes>
  );
};

export default RoutesApp;

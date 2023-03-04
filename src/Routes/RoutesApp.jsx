import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../Pages/Home/HomePage";
import Registration from "../Pages/Registration/Registration";
import Auth from "../Pages/Auth/Auth";
import NotFound from "../Pages/404/NotFound";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesApp;

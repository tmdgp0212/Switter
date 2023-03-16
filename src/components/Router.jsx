import React, { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

function AppRouter({ isLoggedIn }) {
  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Home /> : <Auth />} />
    </Routes>
  );
}

export default AppRouter;

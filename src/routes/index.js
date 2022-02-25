import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "views/layout";
import ErrorPage from "views/pages/error";
import Home from "views/pages/home";
import Mint from "views/pages/mint";

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="mint" element={<Mint />} />
          <Route path="*" element={<ErrorPage code={404} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

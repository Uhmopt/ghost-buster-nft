import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "views/layout";
import ErrorPage from "views/pages/error";
import Home from "views/pages/home";
import Lab from "views/pages/lab";
import Mint from "views/pages/mint";
import Stake from "views/pages/stake";

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="mint" element={<Mint />} />
          <Route path="stake" element={<Stake />} />
          <Route path="lab" element={<Lab />} />
          <Route path="*" element={<ErrorPage code={404} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

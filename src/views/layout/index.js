import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-home bg-center bg-no-repeat bg-cover bg-fixed w-full h-screen px-3 shadow-fade-white">
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

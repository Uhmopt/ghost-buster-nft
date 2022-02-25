import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import BackgroundContainer from "./BackgroundContainer";

export default function Layout() {
  return (
    <BackgroundContainer>
      <Container className="flex-grow">
        <Outlet />
      </Container>
    </BackgroundContainer>
  );
}

import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

export default function Layout() {
  return (
    <div
      className={
        "w-full h-screen " +
        "bg-home bg-center bg-no-repeat bg-cover bg-fixed " +
        "shadow-fade-white " +
        "relative "
      }
    >
      <div
        className={
          "fixed w-full h-full left-0 top-0 overflow-auto " +
          "flex flex-col items-stretch"
        }
      >
        <Container className="flex-grow">
          <Outlet />
        </Container>
      </div>
      <div className="fixed w-full left-0 px-9 pt-9">
        <Header />
      </div>
    </div>
  );
}

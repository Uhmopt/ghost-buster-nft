import React from "react";
import { useLocation } from "react-router-dom";
import AdditionalLayouts from "./additional";
import Header from "./header";

export default function BackgroundContainer({ children = null }) {
  const pathname = useLocation().pathname;

  let pageName = String(pathname.split("/")?.[1] || "home").toLowerCase();

  pageName = pageName === "stake" ? "mint" : pageName;

  return (
    <div
      className={[
        "w-full h-screen ",
        `bg-${pageName}`,
        "bg-center bg-no-repeat bg-cover bg-fixed ",
        "shadow-fade-white ",
        "relative ",
      ].join(" ")}
    >
      <div className="fixed w-full h-full">
        <AdditionalLayouts pageName={pageName} />
      </div>
      <div
        className={[
          "fixed w-full h-full left-0 top-0 overflow-auto ",
          "flex flex-col items-stretch",
        ].join(" ")}
      >
        {children}
      </div>
      <div className="fixed w-full left-0 px-9 pt-9">
        <Header />
      </div>
    </div>
  );
}

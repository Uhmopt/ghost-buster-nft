import React from "react";

export default function BlackContainer({ children = null, className = "" }) {
  return (
    <div
      className={[className, "bg-black bg-opacity-70", "rounded-4xl"].join(" ")}
    >
      {children}
    </div>
  );
}

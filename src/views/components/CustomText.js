import React from "react";

export default function CustomText({
  size = "md",
  className = "",
  children = null,
}) {
  return (
    <div
      className={[
        className,
        `font-extrabold text-center text-${size} text-white text-outline `,
        "opacity-80",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

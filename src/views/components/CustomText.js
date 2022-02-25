import React from "react";

export default function CustomText({
  size = "md",
  className = "",
  transparent = false,
  shadow = false,
  children = null,
}) {
  return (
    <div
      className={[
        className,
        `font-extrabold text-center text-${size} text-white text-outline `,
        transparent ? "opacity-80" : "",
        shadow ? "drop-shadow-fab" : "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

import React from "react";

export default function CustomFabContainer({
  color = "transparent",
  children = null,
  className = "",
  fullWidth = false,
  ...props
}) {
  const isTransparent = color === "transparent";
  color = color === "transparent" ? "white" : color;
  return (
    <div className={fullWidth ? "" : "flex justify-center"}>
      <div
        {...props}
        className={[
          className,
          `bg-${color}`,
          isTransparent ? "bg-opacity-20" : "bg-opacity-70",
          "uppercase text-white py-2 px-4 rounded-full text-xs font-extrabold ",
          "shadow-fab hover:shadow ",
          "cursor-pointer ",
          "transition-all ",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}

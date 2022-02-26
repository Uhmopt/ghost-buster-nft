import React from "react";

export default function CustomFabContainer({
  color = "transparent",
  children = null,
  className = "",
  fullWidth = false,
  transparent = 20,
  ...props
}) {
  color = color === "transparent" ? "white" : color;
  return (
    <div className={fullWidth ? "" : "flex justify-center"}>
      <div
        {...props}
        className={[
          "rounded-4xl",
          `bg-${color}`,
          `bg-opacity-${transparent}`,
          "text-white text-xs font-extrabold ",
          "shadow-fab hover:shadow ",
          "transition-all ",
          className,
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}

import React from "react";

export default function CustomFabContainer({
  color = "transparent",
  children = null,
  className = "",
  fullWidth = false,
  ...props
}) {
  return (
    <div className={fullWidth ? "" : "flex justify-center"}>
      <div
        {...props}
        className={[
          className,
          "uppercase text-white p-2 rounded-full text-xs font-extrabold ",
          "bg-white bg-opacity-10 ",
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

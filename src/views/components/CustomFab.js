import React from "react";
import CustomFabContainer from "./CustomFabContainer";

export default function CustomFab({
  color = "transparent",
  children = null,
  className = "",
  fullWidth = false,
  ...props
}) {
  return (
    <CustomFabContainer
      {...props}
      className={[className, "hover:bg-opacity-20"].join(" ")}
      color={color}
      fullWidth={fullWidth}
    >
      {children}
    </CustomFabContainer>
  );
}

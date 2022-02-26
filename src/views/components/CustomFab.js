import React from "react";
import { Link } from "react-router-dom";
import CustomFabContainer from "./CustomFabContainer";

export default function CustomFab({
  color = "transparent",
  children = null,
  className = "",
  fullWidth = false,
  to = "",
  transparent = 20,
  ...props
}) {
  const content = (
    <CustomFabContainer
      {...props}
      className={[className, "py-2 px-4", "cursor-pointer"].join(" ")}
      color={color}
      fullWidth={fullWidth}
      transparent={transparent}
    >
      {children}
    </CustomFabContainer>
  );

  return to ? <Link to={to}>{content}</Link> : content;
}

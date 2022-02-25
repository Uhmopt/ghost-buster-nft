import React from "react";
import { Link } from "react-router-dom";
import CustomFabContainer from "./CustomFabContainer";

export default function CustomFab({
  color = "transparent",
  children = null,
  className = "",
  fullWidth = false,
  to = "",
  ...props
}) {
  const content = (
    <CustomFabContainer
      {...props}
      className={[className].join(" ")}
      color={color}
      fullWidth={fullWidth}
    >
      {children}
    </CustomFabContainer>
  );

  return to ? <Link to={to}>{content}</Link> : content;
}

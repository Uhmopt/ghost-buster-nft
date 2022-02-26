import React from "react";
import { Link } from "react-router-dom";
import CustomText from "./CustomText";

export default function CustomButton({
  variant = "text",
  fullWidth = false,
  children = null,
  isShadow,
  to = "",
  color = "white",
  outlined = true,
  size = "lg",
  onClick = () => {},
}) {
  const content =
    typeof children === "string" || typeof children === "number" ? (
      <CustomText color={color} outlined={outlined} size={size}>
        {children}
      </CustomText>
    ) : (
      children
    );

  const shadow =
    typeof isShadow === "boolean" ? isShadow : variant === "outlined";

  const handleClick = () => {
    onClick();
  };

  const container = (
    <div className="flex justify-center" onClick={handleClick}>
      <div
        className={[
          "cursor-pointer ",
          shadow ? "shadow-fab hover:shadow " : "",
          "transition-all ",
          fullWidth ? "flex-grow" : "",
          variant === "text"
            ? `hover:underline underline-offset-2 decoration-${color}`
            : variant === "outlined"
            ? `border-2 border-${color} uppercase`
            : "",
        ].join(" ")}
      >
        <div className="px-2">{content}</div>
      </div>
    </div>
  );

  return to ? <Link to={to}>{container}</Link> : container;
}

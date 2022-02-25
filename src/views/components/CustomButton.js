import React from "react";
import CustomText from "./CustomText";

export default function CustomButton({
  variant = "text",
  fullWidth = false,
  children = null,
  isShadow,
  to = "",
  onClick = () => {},
}) {
  const content =
    typeof children === "string" ? (
      <CustomText size="lg">{children}</CustomText>
    ) : (
      children
    );

  const shadow =
    typeof isShadow === "boolean" ? isShadow : variant === "outlined";

  return (
    <div className="flex justify-center uppercase" onClick={onClick}>
      <div
        className={[
          "cursor-pointer ",
          shadow ? "shadow-fab hover:shadow " : "",
          "transition-all ",
          fullWidth ? "flex-grow" : "",
          variant === "text"
            ? "hover:underline underline-offset-2 decoration-white"
            : variant === "outlined"
            ? "border-2 border-white"
            : "",
        ].join(" ")}
      >
        <div className="px-2">{content}</div>
      </div>
    </div>
  );
}

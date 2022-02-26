import React from "react";
import CustomText from "./CustomText";

export default function LabelControl({
  label = "",
  control = null,
  children = null,
  size = "md",
}) {
  const renderContent = control || children;

  const content =
    typeof renderContent === "string" || typeof renderContent === "number" ? (
      <CustomText size={size}>{renderContent}</CustomText>
    ) : (
      renderContent
    );

  return (
    <div className="flex justify-between items-center">
      <CustomText size={size}>{label}</CustomText>
      {content}
    </div>
  );
}

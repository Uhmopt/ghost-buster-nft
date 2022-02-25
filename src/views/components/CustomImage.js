import { APP_NAME } from "config";
import React from "react";

export default function CustomImage({
  src = "",
  title = "",
  alt = "",
  ...props
}) {
  return <img src={src ?? ""} alt={alt || title || APP_NAME} {...props} />;
}

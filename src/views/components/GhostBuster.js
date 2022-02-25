import React from "react";
import CustomImage from "./CustomImage";
import GHOST_BUSTER from "assets/img/ghost-buster.png";
import GHOST from "assets/img/ghost.png";
import BUSTER from "assets/img/buster.png";
import { APP_NAME } from "config";

export default function GhostBuster({
  variant = "ghost-buster",
  className = "",
}) {
  return variant === "ghost" ? (
    <CustomImage
      src={GHOST}
      alt={APP_NAME}
      className={[className, "animate-idle"].join(" ")}
    />
  ) : variant === "buster" ? (
    <CustomImage src={BUSTER} alt={APP_NAME} className={className} />
  ) : (
    <CustomImage src={GHOST_BUSTER} alt={APP_NAME} className={className} />
  );
}

import React from "react";
import CustomImage from "./CustomImage";
import GHOST_BUSTER from "assets/img/ghost-buster.png";
import { APP_NAME } from "config";

export default function GhostBuster() {
  return (
    <div className="w-full flex justify-center">
      <CustomImage
        src={GHOST_BUSTER}
        alt={APP_NAME}
        className="object-center object-contain"
      />
    </div>
  );
}

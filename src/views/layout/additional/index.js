import React from "react";
import GhostBuster from "views/components/GhostBuster";

export default function AdditionalLayouts({ pageName = "home" }) {
  return pageName === "home" ? null : pageName === "mint" ? (
    <div className="w-full h-full flex flex-col justify-end p-9">
      <div className="flex justify-between items-center">
        <GhostBuster variant="buster" />
        <GhostBuster variant="ghost" className="sm-max:hidden" />
      </div>
    </div>
  ) : null;
}

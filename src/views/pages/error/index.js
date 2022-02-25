import React from "react";

export default function ErrorPage({ code = 404 }) {
  return <div>{code} Error Page</div>;
}

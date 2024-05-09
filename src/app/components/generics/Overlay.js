import React from "react";

function Overlay({ open, children }) {
  return <div>{open && <div className="overlay-wrapper">{children}</div>}</div>;
}

export default Overlay;

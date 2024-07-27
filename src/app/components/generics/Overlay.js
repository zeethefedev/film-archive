import React from "react";

function Overlay({ open, children }) {
  return (
    <div>
      {open && (
        <div className="w-full h-full fixed z-10 top-0 left-0 flex items-center justify-center bg-overlay">
          {children}
        </div>
      )}
    </div>
  );
}

export default Overlay;

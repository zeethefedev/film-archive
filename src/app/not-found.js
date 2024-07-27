import React from "react";
import BackButton from "./components/generics/BackButton";

function NotFound() {
  return (
    <div className="main-section-layout">
      <h2>Error</h2>
      <div className="body-text">{`It's not you. It's me.`}</div>
      <BackButton text="back to home" />
    </div>
  );
}

export default NotFound;

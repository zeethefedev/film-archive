import React from "react";
import SVGIcon from "./SVGIcon";

function IconButton(props) {
  const { className = "tetriary-button", disabled, icon, onClick } = props;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      <SVGIcon
        icon={icon}
        fill={disabled ? "rgba(245, 242, 228, 0.5)" : "white"}
        width="24px"
        height="24px"
      />
    </button>
  );
}

export default IconButton;

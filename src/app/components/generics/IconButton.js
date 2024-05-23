import React from "react";
import SVGIcon from "./SVGIcon";

function IconButton(props) {
  const {
    className = "tetriary-button",
    disabled,
    icon,
    onClick,
    buttonStyle,
  } = props;
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      style={buttonStyle}
    >
      <SVGIcon icon={icon} fill="white" width="24px" height="24px" />
    </button>
  );
}

export default IconButton;

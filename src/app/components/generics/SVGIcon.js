import React from "react";
import { ICONS } from "../../utils/constants";

function SVGIcon({
  icon,
  fill = "currentColor",
  height = "1em",
  width = "1em",
}) {
  const currentIcon = ICONS.find((ic) => ic.name === icon);

  return (
    <div className="flex">
      {currentIcon && (
        <svg fill={fill} viewBox="0 0 24 24" height={height} width={width}>
          <path d={currentIcon.path} />
        </svg>
      )}
    </div>
  );
}

export default SVGIcon;

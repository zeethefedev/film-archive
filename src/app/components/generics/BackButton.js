"use client";

import React from "react";
import SVGIcon from "./SVGIcon";
import { useRouter } from "next/navigation";

function BackButton(props) {
  const {
    className = "primary-button",
    text = "back",
    icon,
    buttonStyle,
  } = props;
  const router = useRouter();

  const handleClickBack = () => {
    router.push("/");
  };

  return (
    <button className={className} onClick={handleClickBack} style={buttonStyle}>
      {icon && <SVGIcon icon="back" width="24px" height="24px" />}
      <span>{text}</span>
    </button>
  );
}

export default BackButton;

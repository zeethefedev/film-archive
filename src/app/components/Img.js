import Image from "next/image";
import React from "react";

function Img(props) {
  const { width, height, src, alt, aspectRatio, objectFit = "cover" } = props;

  const imageData = src.split("/");
  const ratio = imageData.find((data) => data.includes("x"))?.replace("x", "/");

  return (
    <div
      style={{
        position: "relative",
        width: width || "auto",
        height: height || "auto",
        aspectRatio: aspectRatio || ratio || "auto",
      }}
    >
      <Image src={src} alt={alt} sizes={width} fill style={{ objectFit }} />
    </div>
  );
}

export default Img;

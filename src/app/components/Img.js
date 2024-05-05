import Image from "next/image";
import React from "react";

function Img(props) {
  const { width, height, src, alt } = props;

  const imageData = src.split("/");
  const ratio = imageData.find((data) => data.includes("x"))?.replace("x", "/");

  return (
    <div
      style={{
        position: "relative",
        width: width,
        height: height || "auto",
        aspectRatio: ratio || "auto",
      }}
    >
      <Image
        src={src}
        alt={alt}
        sizes={width}
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export default Img;

import Image from "next/image";
import React from "react";

function Img(props) {
  const { width, height, src, alt } = props;
  return (
    <div
      style={{ position: "relative", width: width, height: height || "auto" }}
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

import Image from "next/image";
import React from "react";

function Img(props) {
  const { width, height, src, alt } = props;
  return (
    <div style={{ position: "relative", width: width, height: height }}>
      <Image
        src={src}
        alt={alt}
        sizes={width}
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

export default Img;

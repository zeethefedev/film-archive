"use client";

import Image from "next/image";
import React, { useState } from "react";

function Img(props) {
  const { width, height, src, alt, aspectRatio, objectFit = "cover" } = props;

  const imageData = src.split("/");
  const ratio = imageData.find((data) => data.includes("x"))?.replace("x", "/");
  const [isImageLoading, setImageLoading] = useState(true);

  return (
    <div
      style={{
        position: "relative",
        width: width || "auto",
        height: height || "auto",
        aspectRatio: aspectRatio || ratio || "auto",
      }}
    >
      <Image
        src={src}
        alt={alt}
        sizes={width}
        fill
        placeholder="blur"
        blurDataURL={src}
        onLoad={() => setImageLoading(false)}
        style={{
          objectFit,
          filter: isImageLoading ? "blur(5px)" : "blur(0px)",
          transition: "filter 0.3s ease-in",
        }}
      />
    </div>
  );
}

export default Img;

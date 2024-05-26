"use client";

import Image from "next/image";
import React, { useState } from "react";

function Img(props) {
  const {
    width = "auto",
    height = "auto",
    src,
    alt,
    aspectRatio,
    objectFit = "cover",
    local,
    blur,
  } = props;

  const imageData = !local && src.split("/");
  const ratio = !local
    ? imageData.find((data) => data.includes("x"))?.replace("x", "/")
    : "auto";
  const [isImageLoading, setImageLoading] = useState(true);

  return (
    <div
      className="relative"
      style={{
        width,
        height,
        aspectRatio: aspectRatio || ratio,
      }}
    >
      {local ? (
        <Image width={width} src={src} alt={alt} />
      ) : (
        <Image
          src={src}
          alt={alt}
          sizes={width}
          fill
          placeholder={blur ? "blur" : "empty"}
          blurDataURL={blur}
          onLoad={() => setImageLoading(false)}
          style={{
            objectFit,
            filter: isImageLoading ? "blur(5px)" : "blur(0px)",
            transition: "filter 0.3s ease-in",
          }}
        />
      )}
    </div>
  );
}

export default Img;

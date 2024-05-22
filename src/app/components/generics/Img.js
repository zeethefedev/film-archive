"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

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
    full,
  } = props;

  const imageData = !local && src.split("/");
  const ratio = !local
    ? imageData.find((data) => data.includes("x"))?.replace("x", "/")
    : "auto";
  const [isImageLoading, setImageLoading] = useState(true);
  const [orientation, setOrientation] = useState();

  const handleChangeOrientation = (e) => {
    const portrait = e.matches;

    if (portrait) {
      setOrientation("portrait");
    } else {
      setOrientation("landscape");
    }
  };

  useEffect(() => {
    setOrientation(
      window.matchMedia("(orientation: portrait)").matches
        ? "portrait"
        : "landscape"
    );

    window
      .matchMedia("(orientation: portrait)")
      .addEventListener("change", handleChangeOrientation, false);
  }, []);

  // portrait screen + portrait image = full width
  // landscape screen + portrait image = full height
  // portrait screen + landscape image = full width
  // landscape screen + landscape image = full height

  return (
    <div
      style={{
        position: "relative",
        width: full ? (orientation === "landscape" ? "100vw" : "100vw") : width,
        height: full ? (orientation === "landscape" ? "90vh" : "80vh") : height,
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

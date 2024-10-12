"use client";

import React, { useEffect, useRef, useState } from "react";
import Img from "./generics/Img";

function PhotoViewer({ fullscreen, photo, isSmall }) {
  const imageRef = useRef();
  const [pos, setPos] = useState({ x: 0, y: 0, scale: 1 });

  const handleScroll = (e) => {
    if (!fullscreen) return;
    const delta = e.deltaY * -0.01;
    const newScale = pos.scale + delta < 1 ? 1 : pos.scale + delta; // can only zoom out = 1

    const ratio = 1 - newScale / pos.scale;

    setPos({
      scale: newScale,
      x: newScale === 1 ? 0 : pos.x + (e.clientX - pos.x) * ratio, // reset position
      y: newScale === 1 ? 0 : pos.y + (e.clientY - pos.y) * ratio, // reset position
    });
  };

  useEffect(() => {
    if (!fullscreen) setPos({ x: 0, y: 0, scale: 1 });
  }, [fullscreen]);

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

  const width = () => {
    if (fullscreen || isSmall) return "w-auto";
    else return "w-[60vw]";
  };

  const maxWidth = () => {
    if (fullscreen || isSmall) return "max-w-none";
    else return "max-w-xl";
  };

  const imageHeight = () => {
    if (fullscreen && !isSmall) {
      if (orientation === "portrait") return "42vh";
      else return "80vh";
    } else return;
  };

  return (
    <div className={`${isSmall && "w-full"}`}>
      <div>
        <div
          className={`object-contain	overflow-hidden ${width()} ${maxWidth()}`}
          ref={imageRef}
          onWheelCapture={handleScroll}
        >
          <div
            className={`w-full origin-["0_0"]`}
            style={{
              transform: isSmall
                ? "none"
                : `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
            }}
          >
            <Img
              src={fullscreen ? photo.filename : `${photo.filename}/m/600x600`}
              alt={photo.alt}
              width="100%"
              height={imageHeight()}
              aspectRatio={!fullscreen && "1/1"}
              objectFit={fullscreen ? "contain" : "cover"}
              priority
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoViewer;

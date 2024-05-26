"use client";

import React, { useEffect, useRef, useState } from "react";
import Img from "./generics/Img";

import component from "../../style/component.module.css";

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
    if (fullscreen || isSmall) {
      return "auto";
    } else return "60vw";
  };

  const maxWidth = () => {
    if (fullscreen || isSmall) return "none";
    else return 540;
  };

  const imageHeight = () => {
    if (fullscreen && !isSmall) {
      if (orientation === "portrait") return "42vh";
      else return "80vh";
    } else return;
  };

  return (
    <div style={{ width: isSmall && "100%" }}>
      <div>
        <div
          className={component.zoomImageWrapper}
          ref={imageRef}
          style={{ width: width(), maxWidth: maxWidth() }}
          onWheelCapture={handleScroll}
        >
          <div
            className="w-full"
            style={{
              transform: isSmall
                ? "none"
                : `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
              transformOrigin: "0 0",
            }}
          >
            <Img
              src={photo.filename}
              alt={photo.alt}
              blur={photo.blur}
              width="100%"
              height={imageHeight()}
              aspectRatio={!fullscreen && "1/1"}
              objectFit={fullscreen ? "contain" : "cover"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoViewer;

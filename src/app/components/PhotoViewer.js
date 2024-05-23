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

  return (
    <div style={{ width: isSmall && "100%" }}>
      <div>
        <div
          className={component.zoomImageWrapper}
          ref={imageRef}
          style={{
            width: fullscreen || isSmall ? "auto" : "60vw",
            maxWidth: fullscreen || isSmall ? "none" : 540,
          }}
          onWheelCapture={handleScroll}
        >
          <div
            style={{
              width: "100%",
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
              height={fullscreen && !isSmall && "80vh"}
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

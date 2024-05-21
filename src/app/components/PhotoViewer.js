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

  return (
    <div style={{ width: "100%" }}>
      <div>
        <div
          ref={imageRef}
          style={{
            width: photo.id === fullscreen?.id || isSmall ? "auto" : "60vw",
            maxWidth: photo.id === fullscreen?.id || isSmall ? "none" : 540,
            objectFit: "contain",
            overflow: "hidden",
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
              width={!fullscreen ? "100%" : "auto"}
              height={fullscreen && !isSmall ? "100vh" : "auto"}
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

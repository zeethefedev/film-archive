"use client";

import React, { useEffect, useRef, useState } from "react";
import Img from "./Img";

function PhotoViewer({ fullscreen, photo }) {
  const imageRef = useRef();
  const [pos, setPos] = useState({ x: 0, y: 0, scale: 1 });

  const handleScroll = (e) => {
    if (!fullscreen) return;
    const delta = e.deltaY * -0.01;
    const newScale = pos.scale + delta < 1 ? 1 : pos.scale + delta;

    const ratio = 1 - newScale / pos.scale;

    setPos({
      scale: newScale,
      x: pos.x + (e.clientX - pos.x) * ratio,
      y: pos.y + (e.clientY - pos.y) * ratio,
    });
  };

  useEffect(() => {
    if (!fullscreen) setPos({ x: 0, y: 0, scale: 1 });
  }, [fullscreen]);

  return (
    <div>
      PhotoViewer
      <div>
        <div></div>
        <div
          ref={imageRef}
          style={{
            width: photo.id === fullscreen ? "100vw" : "50vw",
            objectFit: "cover",
            overflow: "hidden",
          }}
          onWheelCapture={handleScroll}
        >
          <div
            className="scrollimgzoom"
            style={{
              width: "100%",
              transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
              transformOrigin: "0 0",
            }}
          >
            <Img src={photo.filename} alt={photo.alt} width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoViewer;

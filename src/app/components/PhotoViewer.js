"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function PhotoViewer({ photo }) {
  const imageRef = useRef();
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0, scale: 1 });
  const [origin, setOrigin] = useState("center");

  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale(scale - 0.1);
  };

  const handleZoom = (e) => {
    if (imageRef) {
      const top = imageRef.current?.getBoundingClientRect().top;
      const left = imageRef.current?.getBoundingClientRect().left;
      const mouseY = e.clientY - top;
      const mouseX = e.clientX - left;

      setOrigin({ x: mouseX, y: mouseY });
      setScale(scale + 0.1);
      console.log(origin);
    }
  };

  const handleScroll = (e) => {
    const delta = e.deltaY * -0.01;
    const newScale = pos.scale + delta < 1 ? 1 : pos.scale + delta;

    const ratio = 1 - newScale / pos.scale;

    setPos({
      scale: newScale,
      x: pos.x + (e.clientX - pos.x) * ratio,
      y: pos.y + (e.clientY - pos.y) * ratio,
    });
  };

  return (
    <div>
      PhotoViewer
      <div>
        <div>
          <button onClick={handleZoomIn}>Zoom In</button>
          <button onClick={handleZoomOut}>Zoom Out</button>
        </div>
        <div
          ref={imageRef}
          style={{
            width: "50vw",
            height: "40vh",
            objectFit: "cover",
            overflow: "hidden",
          }}
          onWheelCapture={handleScroll}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            style={{
              width: "100%",
              height: "100%",
              transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
              transformOrigin: "0 0",
            }}
          />
        </div>

        {/* <Image width={500} height={500} src={photo.src} alt={photo.alt} /> */}
      </div>
    </div>
  );
}

export default PhotoViewer;

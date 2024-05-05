"use client";

import React, { useRef, useState } from "react";
import Img from "./Img";

function PhotoViewer({ fullscreen, photo }) {
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

  return (
    <div>
      PhotoViewer
      <div>
        <div></div>
        <div
          ref={imageRef}
          style={{
            width: photo.id === fullscreen ? "100vw" : "50vw",
            height: photo.id === fullscreen ? "100vh" : "auto",
            objectFit: "cover",
            overflow: "hidden",
          }}
          onWheelCapture={handleScroll}
        >
          <div
            className="scrollimgzoom"
            style={{
              backgroundColor: "red",
              width: "100%",
              height: "100%",
              transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
              transformOrigin: "0 0",
            }}
          >
            <Img
              src={photo.filename}
              alt={photo.alt}
              width="100%"
              height="100vh"
            />
          </div>
        </div>

        {/* <Image width={500} height={500} src={photo.src} alt={photo.alt} /> */}
      </div>
    </div>
  );
}

export default PhotoViewer;

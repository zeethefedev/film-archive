"use client";

import React, { useEffect, useState } from "react";
import Img from "./generics/Img";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function PhotoViewer({ fullscreen, photo, isSmall }) {
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

  return (
    <div className={`${isSmall && "w-full"}`}>
      <div className={`object-contain	overflow-hidden ${width()} ${maxWidth()}`}>
        <div className="w-full">
          {fullscreen && !isSmall ? (
            <TransformWrapper>
              <TransformComponent>
                <ImageViewer
                  fullscreen={fullscreen}
                  isSmall={isSmall}
                  orientation={orientation}
                  photo={photo}
                />
              </TransformComponent>
            </TransformWrapper>
          ) : (
            <ImageViewer
              fullscreen={fullscreen}
              isSmall={isSmall}
              orientation={orientation}
              photo={photo}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function ImageViewer({ fullscreen, isSmall, orientation, photo }) {
  const imageHeight = () => {
    if (fullscreen && !isSmall) {
      if (orientation === "portrait") return "42vh";
      else return "80vh";
    } else return;
  };

  return (
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
  );
}

export default PhotoViewer;

"use client";

import React, { useEffect, useState } from "react";
import PhotoViewer from "./PhotoViewer";
import Overlay from "./generics/Overlay";
import PhotoListPlaceholder from "./PhotoListPlaceholder";
import BackButton from "./generics/BackButton";

import component from "../../style/component.module.css";
import { BREAKPOINT } from "../utils/constants";
import ImageSlide from "./ImageSlide";
import IconButton from "./generics/IconButton";

function PhotoCard({ photo, handleShowFullscreen, isSmall }) {
  return (
    <div className={component.photoCardWrapper}>
      <div className="relative flex items-center">
        <IconButton
          onClick={handleShowFullscreen}
          className="absolute z-10 right-0 bottom-0"
          icon="full-screen"
        />
        <PhotoViewer isSmall={isSmall} photo={photo} />
      </div>
    </div>
  );
}

function PhotoList({ photos, description }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleResize = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize, false);
  }, []);

  const [fullscreen, setFullscreen] = useState(false);

  const handleShowFullscreen = (photo) => {
    const body = document?.getElementsByTagName("body");
    if (!fullscreen && fullscreen !== 0) {
      if (body) {
        body[0].style.overflow = "hidden";
      }
      setFullscreen(photo);
    } else {
      if (body) {
        body[0].style.overflow = "visible";
      }
      setFullscreen();
    }
  };

  return (
    <div>
      <div className="page-layout">
        {photos.length !== 0 && (
          <BackButton
            className="tetriary-button button-icon-text sticky z-10"
            buttonStyle={{
              backgroundColor: "rgba(245, 242, 228, 0.5)",
              top: "2rem",
            }}
            icon
          />
        )}
        <div
          className={`hide-scrollbar ${component.photoListWrapper} ${
            photos.length === 0 && "h-auto"
          }`}
        >
          {photos.map((photo, index) => (
            <div key={index} className={component.photoCardOuterWrapper}>
              <PhotoCard
                isSmall={dimensions.width < BREAKPOINT.MOBILE}
                photo={photo}
                handleShowFullscreen={() => handleShowFullscreen(index)}
              />
            </div>
          ))}
        </div>
      </div>
      {(fullscreen || fullscreen === 0) && (
        <Overlay open={true}>
          <ImageSlide
            isSmall={dimensions.width < BREAKPOINT.MOBILE}
            steps={photos}
            active={fullscreen}
            handleShowFullscreen={() => handleShowFullscreen()}
          />
        </Overlay>
      )}
      {(photos.length < 2 || description) && (
        <PhotoListPlaceholder description={description} />
      )}
    </div>
  );
}

export default PhotoList;

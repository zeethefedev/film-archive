"use client";

import React, { useEffect, useState } from "react";
import PhotoViewer from "./PhotoViewer";
import SVGIcon from "./generics/SVGIcon";
import Overlay from "./generics/Overlay";
import PhotoListPlaceholder from "./PhotoListPlaceholder";
import BackButton from "./generics/BackButton";

import component from "../../style/component.module.css";
import { BREAKPOINT } from "../utils/constants";

function PhotoCard({ photo, fullscreen, handleShowFullscreen, isSmall }) {
  return (
    <div className={component.photoCardWrapper}>
      <div
        style={{ position: "relative", display: "flex", alignItems: "center" }}
      >
        <button
          className="tetriary-button"
          onClick={handleShowFullscreen}
          style={{
            position: "absolute",
            zIndex: 10,
            right: 0,
            bottom: 0,
          }}
        >
          <SVGIcon
            icon={!fullscreen ? "full-screen" : "full-screen-exit"}
            fill="white"
            width="24px"
            height="24px"
          />
        </button>
        <PhotoViewer
          isSmall={isSmall}
          fullscreen={fullscreen}
          photo={fullscreen || photo}
        />
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
    if (!fullscreen) {
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
            className="tetriary-button button-icon-text sticky"
            buttonStyle={{ top: 32, zIndex: 10 }}
            icon
          />
        )}
        <div
          style={{ height: photos.length === 0 && "auto" }}
          className={`hide-scrollbar ${component.photoListWrapper}`}
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              style={{ scrollSnapAlign: "center" }}
              className={component.photoCardOuterWrapper}
            >
              <PhotoCard
                isSmall={dimensions.width < BREAKPOINT.MOBILE}
                photo={photo}
                fullscreen={fullscreen}
                handleShowFullscreen={() =>
                  handleShowFullscreen(!fullscreen && photo)
                }
              />
            </div>
          ))}
        </div>
      </div>
      {fullscreen && (
        <Overlay open={true}>
          <PhotoCard
            isSmall={dimensions.width < BREAKPOINT.MOBILE}
            photo={fullscreen}
            fullscreen={fullscreen}
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

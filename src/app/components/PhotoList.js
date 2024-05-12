"use client";

import React, { useState } from "react";
import PhotoViewer from "./PhotoViewer";
import SVGIcon from "./generics/SVGIcon";
import Overlay from "./generics/Overlay";
import PhotoListPlaceholder from "./PhotoListPlaceholder";
import BackButton from "./generics/BackButton";

function PhotoCard({ photo, fullscreen, handleShowFullscreen }) {
  return (
    <div style={{ height: "100vh" }}>
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
        <PhotoViewer fullscreen={fullscreen} photo={fullscreen || photo} />
      </div>
    </div>
  );
}

function PhotoList({ photos, description }) {
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
            buttonStyle={{ top: 32 }}
            icon
          />
        )}
        <div
          className="hide-scrollbar"
          style={{
            display: "flex",
            flexDirection: "column",
            // flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "flex-start",
            height: photos.length === 0 ? "auto" : "100vh",
            overflow: "scroll",
            scrollSnapType: "y mandatory",
          }}
        >
          {photos.map((photo, index) => (
            <div key={index} style={{ scrollSnapAlign: "center" }}>
              <PhotoCard
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

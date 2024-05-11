"use client";

import React, { useState } from "react";
import PhotoViewer from "./PhotoViewer";
import SVGIcon from "./generics/SVGIcon";
import Overlay from "./generics/Overlay";
import PhotoListPlaceholder from "./PhotoListPlaceholder";

const PHOTO_LIST = [
  { id: 1, src: "/thumbnails/thumbnail1.jpg", alt: "film roll" },
];

function PhotoList({ photos = PHOTO_LIST, description }) {
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

  const photoCard = (photo) => {
    return (
      <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <button
            className="tetriary-button"
            onClick={() => handleShowFullscreen(!fullscreen && photo)}
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
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "100vh",
          overflow: "scroll",
          scrollSnapType: "y mandatory",
        }}
      >
        {photos.map((photo, index) => (
          <div key={index} style={{ scrollSnapAlign: "center" }}>
            {photoCard(photo)}
          </div>
        ))}
      </div>
      {fullscreen && <Overlay open={true}>{photoCard(fullscreen)}</Overlay>}
      {(photos.length < 2 || description) && (
        <PhotoListPlaceholder description={description} />
      )}
    </div>
  );
}

export default PhotoList;

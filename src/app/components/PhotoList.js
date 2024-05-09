"use client";

import React, { useState } from "react";
import PhotoViewer from "./PhotoViewer";
import SVGIcon from "./SVGIcon";
import Overlay from "./Overlay";

const PHOTO_LIST = [
  { id: 1, src: "/thumbnails/thumbnail1.jpg", alt: "film roll" },
];

function PhotoList({ photos = PHOTO_LIST }) {
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
    );
  };

  return (
    <div>
      <h1>Photo List</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {photos.map((photo, index) => (
          <div key={index}>{photoCard(photo)}</div>
        ))}
      </div>
      {fullscreen && <Overlay open={true}>{photoCard(fullscreen)}</Overlay>}
    </div>
  );
}

export default PhotoList;

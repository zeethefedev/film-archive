"use client";

import React, { useState } from "react";
import PhotoViewer from "./PhotoViewer";

const PHOTO_LIST = [
  { id: 1, src: "/thumbnails/thumbnail1.jpg", alt: "film roll" },
  //   { id: 2, src: "/thumbnails/thumbnail2.jpg", alt: "film roll" },
  //   { id: 3, src: "/thumbnails/thumbnail3.jpg", alt: "film roll" },
  //   { id: 4, src: "/thumbnails/thumbnail4.jpg", alt: "film roll" },
  //   { id: 5, src: "/thumbnails/thumbnail5.jpg", alt: "film roll" },
];

function PhotoList({ photos = PHOTO_LIST }) {
  const [fullscreen, setFullscreen] = useState(false);
  const handleShowFullscreen = (index) => {
    setFullscreen(index);
  };

  return (
    <div>
      <h1>Photo List</h1>
      <div>
        {photos.map((photo, index) => (
          <div
            key={index}
            style={{
              display: !fullscreen
                ? "block"
                : fullscreen === photo.id
                ? "block"
                : "none",
            }}
          >
            <button onClick={() => handleShowFullscreen(photo.id)}>
              Full Screen
            </button>
            <button onClick={() => handleShowFullscreen()}>Exit</button>
            <PhotoViewer fullscreen={fullscreen} photo={photo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoList;

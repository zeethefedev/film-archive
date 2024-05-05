"use client";

import React, { useState } from "react";
import PhotoViewer from "./PhotoViewer";

const PHOTO_LIST = [
  { id: 1, src: "/thumbnails/thumbnail1.jpg", alt: "film roll" },
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
          <div key={index}>
            {(!fullscreen || fullscreen === photo.id) && (
              <div>
                <button onClick={() => handleShowFullscreen(photo.id)}>
                  Full Screen
                </button>
                <button onClick={() => handleShowFullscreen(false)}>
                  Exit
                </button>
                <PhotoViewer fullscreen={fullscreen} photo={photo} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoList;

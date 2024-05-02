import React from "react";
import PhotoViewer from "./PhotoViewer";

const PHOTO_LIST = [
  { id: 1, src: "/thumbnails/thumbnail1.jpg", alt: "film roll" },
  //   { id: 2, src: "/thumbnails/thumbnail2.jpg", alt: "film roll" },
  //   { id: 3, src: "/thumbnails/thumbnail3.jpg", alt: "film roll" },
  //   { id: 4, src: "/thumbnails/thumbnail4.jpg", alt: "film roll" },
  //   { id: 5, src: "/thumbnails/thumbnail5.jpg", alt: "film roll" },
];

function PhotoList({ photos = PHOTO_LIST }) {
  return (
    <div>
      <h1>Photo List</h1>
      <div>
        {photos.map((photo, index) => (
          <div key={index}>
            <PhotoViewer photo={photo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoList;

import PhotoList from "@/app/components/PhotoList";
import React from "react";

function FilmRoll({ params }) {
  const filmRoll = params.roll;
  return (
    <div>
      {filmRoll}
      <PhotoList />
    </div>
  );
}

export default FilmRoll;

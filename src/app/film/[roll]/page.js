import { getFilm } from "@/app/api/film.api";
import PhotoList from "@/app/components/PhotoList";
import React from "react";

async function FilmRoll({ params }) {
  const filmRoll = params.roll;
  const filmData = await getFilm(filmRoll);
  return (
    <div>
      {filmData.displayName}
      <PhotoList photos={filmData.content.photos} />
    </div>
  );
}

export default FilmRoll;

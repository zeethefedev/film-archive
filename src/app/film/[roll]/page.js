import { getFilm } from "@/app/api/film.api";
import PhotoList from "@/app/components/PhotoList";
import BackButton from "@/app/components/generics/BackButton";
import React from "react";

async function FilmRoll({ params }) {
  const filmRoll = params.roll;
  const filmData = await getFilm(filmRoll);

  return (
    <div>
      {filmData.content.displayName}
      <BackButton className="tetriary-button button-icon-text sticky" icon />
      <PhotoList
        photos={filmData.content.photos}
        description={filmData.content.description}
      />
    </div>
  );
}

export default FilmRoll;

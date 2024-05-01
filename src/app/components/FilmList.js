import React from "react";
import { getFilmRolls } from "../api/film.api";
import FilmCard from "./FilmCard";

async function FilmList({ films }) {
  const filmRolls = await getFilmRolls();

  return (
    <div>
      <h1>FilmList</h1>
      <div>
        {filmRolls.map((film, index) => (
          <div key={index}>
            <FilmCard film={film} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmList;

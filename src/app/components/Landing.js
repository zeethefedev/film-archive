import React from "react";
import RunningText from "./RunningText";
import ParallaxSection from "./ParallaxSection";
import FilmList from "./FilmList";
import { getFilmList, getFilmRolls } from "../api/film.api";

async function Landing() {
  const filmRolls = await getFilmRolls();
  const filmList = await getFilmList();

  return (
    <div>
      {/* <RunningText /> */}
      {/* <ParallaxSection /> */}
      <FilmList films={filmList} />
    </div>
  );
}

export default Landing;

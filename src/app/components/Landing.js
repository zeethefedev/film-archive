import React from "react";
import RunningText from "./RunningText";
import ParallaxSection from "./ParallaxSection";
import FilmList from "./FilmList";
import { getFilmRolls } from "../api/film.api";

async function Landing() {
  const filmRolls = await getFilmRolls();

  return (
    <div>
      {/* <RunningText /> */}
      {/* <ParallaxSection /> */}
      <FilmList filmRolls={filmRolls} />
    </div>
  );
}

export default Landing;

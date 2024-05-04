import React from "react";
import RunningText from "./RunningText";
import ParallaxSection from "./ParallaxSection";
import FilmList from "./FilmList";
import { getFilmList } from "../api/film.api";

async function Landing() {
  const filmList = await getFilmList();

  return (
    <div>
      <RunningText />
      {/* <ParallaxSection /> */}
      <FilmList films={filmList} />
    </div>
  );
}

export default Landing;

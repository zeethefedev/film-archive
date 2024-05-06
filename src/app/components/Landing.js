import React from "react";
import RunningText from "./RunningText";
import ParallaxSection from "./ParallaxSection";
import FilmList from "./FilmList";
import { getFilmList } from "../api/film.api";
import ScrollText from "./ScrollText";

async function Landing() {
  const filmList = await getFilmList();

  return (
    <div>
      {/* <RunningText /> */}
      <ScrollText />
      {/* <ParallaxSection /> */}
      {/* <FilmList films={filmList} /> */}
    </div>
  );
}

export default Landing;

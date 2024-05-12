import React from "react";
import FilmList from "./FilmList";
import { getFilmList } from "../api/film.api";
import ScrollText from "./ScrollText";

async function Landing() {
  const filmList = await getFilmList();

  return (
    <div>
      {/* <RunningText /> */}
      <div
        style={{
          padding: "32px 100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ScrollText />
      </div>
      {/* <ParallaxSection><div>children</div></ParallaxSection> */}
      <FilmList films={filmList} />
    </div>
  );
}

export default Landing;

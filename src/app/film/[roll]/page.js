import React from "react";

function FilmRoll({ params }) {
  const filmRoll = params.roll;
  return <div>{filmRoll}</div>;
}

export default FilmRoll;

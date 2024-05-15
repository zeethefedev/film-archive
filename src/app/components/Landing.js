"use client";

import React, { useEffect, useState } from "react";
import FilmList from "./FilmList";
import ScrollText from "./ScrollText";
import { BREAKPOINT } from "../utils/constants";

function Landing({ films }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleResize = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <div>
      <ScrollText isSmall={dimensions.width < BREAKPOINT.MOBILE} />
      <FilmList films={films} isSmall={dimensions.width < BREAKPOINT.MOBILE} />
    </div>
  );
}

export default Landing;

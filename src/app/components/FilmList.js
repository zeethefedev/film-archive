"use client";

import React, { useState } from "react";
import FilmCard from "./FilmCard";
import component from "../../style/component.module.css";
import HorizontalScrollSection from "./generics/HorizontalScrollSection";

function FilmList({ films }) {
  const [activeCard, setActiveCard] = useState();

  const handleHoverCard = (film) => {
    if (film) {
      setActiveCard(film.id);
    } else {
      setActiveCard();
    }
  };

  return (
    <HorizontalScrollSection
      xTranslate={["0%", "-310%"]}
      bgColor={["#f5f2e4", "#5c0000"]}
      wrapperStyle={{ top: "20%" }}
    >
      <div style={{ display: "flex", gap: 24 }}>
        {films.map((film, index) => (
          <div
            key={index}
            id="card"
            onMouseEnter={() => handleHoverCard(film)}
            onMouseLeave={() => handleHoverCard()}
          >
            <FilmCard film={film} activeCard={activeCard} />
          </div>
        ))}
      </div>
    </HorizontalScrollSection>
  );
}

export default FilmList;

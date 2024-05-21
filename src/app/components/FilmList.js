"use client";

import React, { useRef, useState } from "react";
import FilmCard from "./FilmCard";
import HorizontalScrollSection from "./generics/HorizontalScrollSection";
import { useScroll, useTransform } from "framer-motion";

function FilmList({ films, isSmall }) {
  const [activeCard, setActiveCard] = useState();

  const handleHoverCard = (film) => {
    if (film) {
      setActiveCard(film.id);
    } else {
      setActiveCard();
    }
  };
  const targetRef = useRef();

  const offset = ["start start", "start -0.1"];
  const { scrollYProgress: text } = useScroll({ target: targetRef, offset });

  const textColor = useTransform(text, [0, 1], ["#5c0000", "#f5f2e4"]);

  return (
    <div ref={targetRef}>
      {isSmall ? (
        <HorizontalScrollSection bgColor={["#f5f2e4", "#5c0000"]} height="auto">
          <div
            className="page-layout"
            style={{
              display: "flex",
              gap: 24,
              flexDirection: "column",
              marginTop: 120,
            }}
          >
            {films.map((film, index) => (
              <FilmCard
                key={index}
                isSmall
                film={film}
                activeCard={activeCard}
                textColor={textColor}
              />
            ))}
          </div>
        </HorizontalScrollSection>
      ) : (
        <HorizontalScrollSection
          xTranslate={["0%", "-310%"]}
          bgColor={["#f5f2e4", "#5c0000"]}
          wrapperStyle={{ height: "70vh", top: "20%" }}
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
      )}
    </div>
  );
}

export default FilmList;

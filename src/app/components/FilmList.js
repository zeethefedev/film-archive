"use client";

import React, { useRef, useState } from "react";
import FilmCard from "./FilmCard";
import component from "../../style/component.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

function FilmList({ films }) {
  const targetRef = useRef();

  const { scrollYProgress: horizontalScroll } = useScroll({
    target: targetRef,
    offset: ["start start", "0.7 end"],
    // "start end" means when the start of the target meets the end of the container.
  });

  const { scrollYProgress: background } = useScroll({
    target: targetRef,
    offset: ["start 0.2", "start start"],
  });

  const x = useTransform(horizontalScroll, [0, 1], ["1%", "-310%"]);
  const backgroundColor = useTransform(
    background,
    [0, 1],
    ["#f5f2e4", "#5c0000"]
  );

  const [activeCard, setActiveCard] = useState();

  const handleHoverCard = (film) => {
    if (film) {
      setActiveCard(film.id);
    } else {
      setActiveCard();
    }
  };

  return (
    <motion.div ref={targetRef} style={{ height: "300vh", backgroundColor }}>
      <div className={component.horizontalScrollWrapper}>
        <motion.div className={component.cardWrapper} style={{ x }}>
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
        </motion.div>
      </div>
    </motion.div>
  );
}

export default FilmList;

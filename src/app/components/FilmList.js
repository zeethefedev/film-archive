"use client";

import React, { useRef } from "react";
import FilmCard from "./FilmCard";
import component from "../../style/component.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

function FilmList({ films }) {
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
    // "start end" means when the start of the target meets the end of the container.
  });
  const x = useTransform(scrollYProgress, [0, 0.5], ["1%", "-200%"]);

  return (
    <div ref={targetRef} style={{ height: "300vh" }}>
      <div className={component.horizontalScrollWrapper}>
        <motion.div className={component.cardWrapper} style={{ x }}>
          {films.map((film, index) => (
            <div key={index} id="card">
              <FilmCard film={film} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default FilmList;

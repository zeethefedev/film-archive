"use client";

import React, { useEffect, useRef, useState } from "react";
import FilmCard from "./FilmCard";
import component from "../../style/component.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FilmList({ films }) {
  const targetRef = useRef();
  const containerRef = useRef();
  const [containerHeight, setContainerHeight] = useState("auto");

  const handleResize = () => {
    const container = containerRef?.current.offsetWidth;
    setContainerHeight(container);
  };

  useEffect(() => {
    handleResize();
  }, [containerRef]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  useGSAP(
    () => {
      let cards = gsap.utils.toArray("#card");

      gsap.to(cards, {
        xPercent: -90 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#container",
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 1),
          end: () => "+=" + containerHeight,
        },
      });
    },
    { scope: targetRef, dependencies: [containerHeight] }
  );

  return (
    <div ref={targetRef}>
      {/* <h1>FilmList</h1> */}
      <div className={`${component.horizontalScrollWrapper}`}>
        <div
          ref={containerRef}
          id="container"
          className={component.cardWrapper}
        >
          {films.map((film, index) => (
            <div key={index} id="card">
              <FilmCard film={film} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: containerHeight }}></div>
    </div>
  );
}

export default FilmList;

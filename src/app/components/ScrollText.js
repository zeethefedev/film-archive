"use client";

import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

import "../globals.css";
import Img from "./generics/Img";
import { RUNNING_TEXT } from "../utils/constants";
import HorizontalScrollSection from "./generics/HorizontalScrollSection";

function LineText({ stringArray, imageArray }) {
  return (
    <div id="container" style={{ display: "flex" }}>
      {[1, 2].map((i, index) => (
        <span
          id="line"
          key={index}
          className="landing-text"
          style={{ display: "flex" }}
        >
          {stringArray.map((string, index) => (
            <span
              style={{ display: "flex", alignItems: "center", gap: 28 }}
              key={index}
            >
              {string}
              <Img
                local
                src={imageArray[index].src}
                alt={imageArray[index].alt}
                height="120px"
              />
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}

function ScrollText() {
  const scrollRef = useRef();

  const { scrollYProgress } = useScroll({ target: scrollRef });

  const translate = [
    useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]),
    useTransform(scrollYProgress, [0, 1], ["-50%", "-10%"]),
    useTransform(scrollYProgress, [0, 1], ["-100%", "-50%"]),
    useTransform(scrollYProgress, [0, 1], ["-30%", "-5%"]),
  ];

  return (
    <div
      style={{
        padding: "32px 100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <HorizontalScrollSection
        multiple
        customRef={scrollRef}
        wrapperStyle={{ width: "70vw", top: 32, marginBottom: 72 }}
        elementStyle={{ position: "relative", whiteSpace: "nowrap" }}
      >
        {RUNNING_TEXT.map((line, index) => ({
          element: <LineText stringArray={line.text} imageArray={line.image} />,
          x: translate[index],
        }))}
      </HorizontalScrollSection>
    </div>
  );
}

export default ScrollText;

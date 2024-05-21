"use client";

import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

import "../globals.css";
import Img from "./generics/Img";
import { RUNNING_TEXT, RUNNING_TEXT_MB } from "../utils/constants";
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

function ScrollText({ isSmall }) {
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
      className="page-layout"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {isSmall ? (
        <span
          className="landing-text"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            alignContent: "center",
            flexWrap: "wrap",
            gap: 8,
            height: "100vh",
          }}
        >
          {RUNNING_TEXT_MB.map((item, index) => (
            <span
              key={index}
              style={{ maxHeight: 100, display: "flex", alignItems: "center" }}
            >
              {item.type === "text" ? (
                <span>{item.value}</span>
              ) : (
                <Img local src={item.src} alt={item.alt} width="70" />
              )}
            </span>
          ))}
        </span>
      ) : (
        <HorizontalScrollSection
          multiple
          customRef={scrollRef}
          wrapperStyle={{
            width: "70vw",
            top: 32,
            marginBottom: 72,
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          elementStyle={{ position: "relative", whiteSpace: "nowrap" }}
        >
          {RUNNING_TEXT.map((line, index) => ({
            element: (
              <LineText stringArray={line.text} imageArray={line.image} />
            ),
            x: translate[index],
          }))}
        </HorizontalScrollSection>
      )}
    </div>
  );
}

export default ScrollText;

"use client";

import React, { useRef } from "react";
import component from "../../style/component.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

import "../globals.css";
import Img from "./generics/Img";
import { RUNNING_TEXT } from "../utils/constants";

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
                width={100}
                src={imageArray[index].src}
                alt={imageArray[index].alt}
              />
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}

function ScrollText() {
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({ target: targetRef });

  const translate = [
    useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]),
    useTransform(scrollYProgress, [0, 1], ["-50%", "-10%"]),
    useTransform(scrollYProgress, [0, 1], ["-100%", "-50%"]),
    useTransform(scrollYProgress, [0, 1], ["-30%", "-5%"]),
  ];

  return (
    <div ref={targetRef} style={{ height: "300vh" }}>
      <div style={{ position: "sticky", top: 0 }}>
        <div style={{ width: "50vw", overflowX: "hidden" }}>
          {RUNNING_TEXT.map((line, index) => (
            <motion.div
              key={index}
              className={component.scrollContainer}
              style={{ x: translate[index] }}
            >
              <LineText stringArray={line.text} imageArray={line.image} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollText;

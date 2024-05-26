"use client";

import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

import "../globals.css";
import Img from "./generics/Img";
import { RUNNING_TEXT, RUNNING_TEXT_MB } from "../utils/constants";
import HorizontalScrollSection from "./generics/HorizontalScrollSection";

import component from "../../style/component.module.css";

function LineText({ stringArray, imageArray }) {
  return (
    <div id="container" className="flex">
      {[1, 2].map((i, index) => (
        <span id="line" key={index} className="flex landing-text">
          {stringArray.map((string, index) => (
            <span className="flex items-center gap-7" key={index}>
              {string}
              <Img
                local
                src={imageArray[index].src}
                alt={imageArray[index].alt}
                height="120px"
                width="100px"
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
    useTransform(scrollYProgress, [0, 1], ["-80%", "0%"]),
    useTransform(scrollYProgress, [0, 1], ["-30%", "-5%"]),
  ];

  return (
    <div className="page-layout flex justify-center">
      {isSmall ? (
        <span className={`landing-text ${component.landingTextWrapper}`}>
          {RUNNING_TEXT_MB.map((line, i) => (
            <div key={i} className="flex gap-2 w-full justify-between">
              {line.map((item, index) => (
                <span
                  key={index}
                  className="flex max-h-24 items-center whitespace-nowrap"
                >
                  {item.type === "text" ? (
                    <span>{item.value}</span>
                  ) : (
                    <Img local src={item.src} alt={item.alt} width="70" />
                  )}
                </span>
              ))}
            </div>
          ))}
        </span>
      ) : (
        <HorizontalScrollSection
          multiple
          customRef={scrollRef}
          wrapperClass={`${component.landingTextWrapper} top-8`}
          elementClass="relative whitespace-nowrap"
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

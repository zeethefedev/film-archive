"use client";

import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import HorizontalScrollSection from "./generics/HorizontalScrollSection";
import BackButton from "./generics/BackButton";

function LineText({ text = "No more film photos beyond this line" }) {
  return (
    <div className="flex gap-7">
      {[1, 2].map((i, index) => (
        <span key={index} className="landing-text whitespace-nowrap">
          {text}
        </span>
      ))}
    </div>
  );
}

function Description({ description }) {
  return (
    <div className="page-layout max-w-2xl m-auto flex flex-column gap-8 align-center text-center">
      <h3>{description}</h3>
      <BackButton text="back to home" />
    </div>
  );
}

function PhotoListPlaceholder(props) {
  const { description = "Film is not dead" } = props;
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({ target: targetRef });

  const translate = [
    useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]),
    useTransform(scrollYProgress, [0, 1], ["0%", "0%"]),
    useTransform(scrollYProgress, [0, 1], ["30%", "10%"]),
  ];

  return (
    <HorizontalScrollSection
      multiple
      wrapperClass="w-full h-screen flex flex-col	justify-between	align-center m-auto"
    >
      {translate.map((x, index) => ({
        element:
          index == 1 ? <Description description={description} /> : <LineText />,
        x,
      }))}
    </HorizontalScrollSection>
  );
}

export default PhotoListPlaceholder;

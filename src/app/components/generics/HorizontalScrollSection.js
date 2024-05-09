"use client";

import React, { useRef } from "react";
import component from "../../../style/component.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

function HorizontalScrollSection({
  children,
  height = "300vh",
  xTranslate = ["1%", "-100%"],
  bgColor = ["#f5f2e4", "#f5f2e4"],
  wrapperStyle = {},
}) {
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

  const x = useTransform(horizontalScroll, [0, 1], xTranslate);
  const backgroundColor = useTransform(background, [0, 1], bgColor);

  return (
    <motion.div
      ref={targetRef}
      style={{
        height,
        backgroundColor: bgColor ? backgroundColor : "transparent",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          overflow: "hidden",
          ...wrapperStyle,
        }}
      >
        <motion.div style={{ x }}>{children}</motion.div>
      </div>
    </motion.div>
  );
}

export default HorizontalScrollSection;

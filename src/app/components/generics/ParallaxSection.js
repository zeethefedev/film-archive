"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxSection({ background, foreground }) {
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "2 end"],
    // "start end" means when the start of the target meets the end of the container.
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div style={{ position: "relative" }}>
      <div ref={targetRef} style={{ minHeight: "200vh" }}>
        {background}
      </div>
      <motion.div
        style={{
          height: "100vh",
          width: "100%",
          position: "absolute",
          y,
        }}
      >
        {foreground}
      </motion.div>
    </div>
  );
}

export default ParallaxSection;

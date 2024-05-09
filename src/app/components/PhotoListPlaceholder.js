"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function LineText({ text = "Film is not dead" }) {
  return (
    <div style={{ display: "flex", gap: 28 }}>
      {[1, 2].map((i, index) => (
        <span
          key={index}
          className="landing-text"
          style={{ whiteSpace: "nowrap" }}
        >
          {text}
        </span>
      ))}
    </div>
  );
}

function PhotoListPlaceholder() {
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({ target: targetRef });

  const translate = [
    useTransform(scrollYProgress, [0, 1], ["-50%", "-10%"]),
    useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]),
  ];

  return (
    <div ref={targetRef} style={{ height: "300vh" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <motion.div style={{ x: translate[0] }}>
          <LineText />
        </motion.div>

        <motion.div style={{ x: translate[1] }}>
          <LineText />
        </motion.div>
      </div>
    </div>
  );
}

export default PhotoListPlaceholder;

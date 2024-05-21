"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function HorizontalScrollSection({
  customRef,
  children,
  height,
  xTranslate = ["0%", "0%"],
  bgColor = ["#f5f2e4", "#f5f2e4"],
  wrapperStyle = {},
  elementStyle = {},
  multiple,
}) {
  const targetRef = useRef();

  const { scrollYProgress: horizontalScroll } = useScroll({
    target: targetRef,
    offset: ["start -0.1", "0.7 end"],
    // "start end" means when the start of the target meets the end of the container.
  });

  const { scrollYProgress: background } = useScroll({
    target: targetRef,
    offset: ["start start", "start -0.1"],
  });

  const x = useTransform(horizontalScroll, [0, 1], xTranslate);
  const backgroundColor = useTransform(background, [0, 1], bgColor);

  return (
    <motion.div
      ref={customRef || targetRef}
      style={{
        height: height || "300vh",
        backgroundColor: bgColor ? backgroundColor : "transparent",
      }}
    >
      {multiple ? (
        <div className="sticky" style={{ overflow: "hidden", ...wrapperStyle }}>
          {children.map((child, index) => (
            <motion.div key={index} style={{ x: child.x, ...elementStyle }}>
              {child.element}
            </motion.div>
          ))}
          {/* const children = [ { element, x } ]; */}
        </div>
      ) : (
        <div className="sticky" style={{ overflow: "hidden", ...wrapperStyle }}>
          <motion.div style={{ x }}>{children}</motion.div>
        </div>
      )}
    </motion.div>
  );
}

export default HorizontalScrollSection;

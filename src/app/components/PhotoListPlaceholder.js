"use client";
import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import HorizontalScrollSection from "./generics/HorizontalScrollSection";
import { useRouter } from "next/navigation";

function LineText({ text = "No more film photos beyond this line" }) {
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

function Description({ description }) {
  const router = useRouter();

  const handleClickBack = () => {
    router.push("/");
  };

  return (
    <div
      style={{
        // width: "50%",
        maxWidth: 600,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 32,
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h3>{description}</h3>
      <button className="primary-button" onClick={handleClickBack}>
        back to home
      </button>
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
      wrapperStyle={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "auto",
      }}
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

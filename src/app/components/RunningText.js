import React from "react";
import component from "../../style/component.module.css";
import Img from "./Img";
import "../globals.css";

const RUNNING_TEXT = [
  {
    text: ["Film is not dead"],
    image: [{ src: "/filmrolls/roll1.png", alt: "film roll" }],
    left: "100%",
  },
  {
    text: ["Film", "is not dead"],
    image: [
      { src: "/filmrolls/roll2.png", alt: "film roll" },
      { src: "/filmrolls/roll3.png", alt: "film roll" },
    ],
    left: "50%",
  },
  {
    text: ["Film is", "not dead"],
    image: [
      { src: "/filmrolls/roll4.png", alt: "film roll" },
      { src: "/filmrolls/roll5.png", alt: "film roll" },
    ],
    left: "100%",
  },
  {
    text: ["Film", "is not", "dead"],
    image: [
      { src: "/filmrolls/roll6.png", alt: "film roll" },
      { src: "/filmrolls/roll7.png", alt: "film roll" },
      { src: "/filmrolls/roll1.png", alt: "film roll" },
    ],
    left: "100%",
  },
];

function RunningText() {
  const text = (stringArray, imageArray) => {
    const element = stringArray.map((string, index) => (
      <div key={index} className={component.horizontalScrollingItem}>
        {string}
        <Img
          width="10vw"
          height="10vh"
          src={imageArray[index].src}
          alt={imageArray[index].alt}
        />
      </div>
    ));
    return element;
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      {RUNNING_TEXT.map((line, index) => (
        <div key={index} className={component.container}>
          {[1, 2].map((i, index) => (
            <div
              key={index}
              className={`landing-text ${
                component.horizontalScrollingWrapper
              } ${index === 1 ? component.marquee2 : ""}`}
              // style={{ left: line.left }}
            >
              {text(line.text, line.image)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default RunningText;

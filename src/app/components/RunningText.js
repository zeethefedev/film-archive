import React from "react";
import Image from "next/image";
import component from "../../style/component.module.css";

const filmRollsImage = [
  { id: 1, src: "/filmrolls/roll1.png", alt: "film roll" },
  { id: 2, src: "/filmrolls/roll2.png", alt: "film roll" },
  { id: 3, src: "/filmrolls/roll3.png", alt: "film roll" },
  { id: 4, src: "/filmrolls/roll4.png", alt: "film roll" },
  { id: 5, src: "/filmrolls/roll5.png", alt: "film roll" },
  { id: 6, src: "/filmrolls/roll6.png", alt: "film roll" },
  { id: 7, src: "/filmrolls/roll7.png", alt: "film roll" },
];

function RunningText() {
  const text = (stringArray, imageArray) => {
    const element = stringArray.map((string, index) => (
      <div key={index} className={component.horizontalScrollingItem}>
        {string}
        <img src={imageArray[index].src} alt={imageArray[index].alt} />
        &nbsp;
      </div>
    ));
    const textElements = [1, 2, 3, 4, 5].map((i, index) => element);
    return textElements;
  };

  return (
    <div>
      {[1, 2, 3, 4].map((i, index) => (
        <div key={index} className={component.container}>
          <div
            className={`${component.horizontalScrollingWrapper} ${
              component[`wrapper${index}`]
            }`}
          >
            {text(["Film", "is", "not", "dead"], filmRollsImage.slice(0, 4))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RunningText;

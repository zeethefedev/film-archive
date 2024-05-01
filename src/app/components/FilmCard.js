"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import component from "../../style/component.module.css";

function CustomCursor({ cursorRef, text }) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const moveCursor = (e) => {
    if (cursorRef) {
      const top = cursorRef.current.getBoundingClientRect().top;
      const left = cursorRef.current.getBoundingClientRect().left;
      const mouseY = e.clientY - top;
      const mouseX = e.clientX - left;

      setCursor({ x: mouseX, y: mouseY });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className={`cursor ${component.rounded}`}
      style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
    >
      {text}
    </div>
  );
}

function FilmCard({ film }) {
  const cursorRef = useRef();
  const [cursorText, setCursorText] = useState();

  const handleHoverImage = () => {
    setCursorText(film.displayName);
  };

  const handleReset = () => {
    setCursorText();
  };

  return (
    <div
      ref={cursorRef}
      className={component.filmCardWrapper}
      onMouseEnter={handleHoverImage}
      onMouseLeave={handleReset}
    >
      <CustomCursor cursorRef={cursorRef} text={cursorText} />
      <div>FilmCard</div>
      <div>{film.displayName}</div>
      <Image width={500} height={500} src={film.thumbnail} alt={film.name} />
    </div>
  );
}

export default FilmCard;

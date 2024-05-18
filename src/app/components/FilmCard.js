"use client";

import React, { useEffect, useRef, useState } from "react";
import component from "../../style/component.module.css";
import { useRouter } from "next/navigation";
import Img from "./generics/Img";

function CustomCursor({ useCustomCursor, cursorRef, text }) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const moveCursor = (e) => {
    if (cursorRef) {
      const top = cursorRef.current?.getBoundingClientRect().top;
      const left = cursorRef.current?.getBoundingClientRect().left;
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
      className={`cursor ${useCustomCursor && component.customCursor}`}
      style={{
        transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`,
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
        gap: 4,
        color: "#f5f2e4",
      }}
    >
      <div className={`${useCustomCursor && component.pointed}`}></div>
      <div>{text}</div>
    </div>
  );
}

function FilmCard({ film, activeCard }) {
  const cursorRef = useRef();
  const [cursorText, setCursorText] = useState();
  const [useCustomCursor, setUseCustomCursor] = useState(false);
  const filmContent = film.content;

  const router = useRouter();

  const handleHoverImage = () => {
    setUseCustomCursor(true);
    setCursorText(filmContent.displayName);
  };

  const handleReset = () => {
    setUseCustomCursor(false);
    setCursorText();
  };

  const handleClickImage = () => {
    router.push(`/film/${film.full_slug}`);
  };

  return (
    <div>
      <div
        ref={cursorRef}
        className={component.filmCardWrapper}
        onMouseEnter={handleHoverImage}
        onMouseLeave={handleReset}
        onClick={handleClickImage}
        style={{ backgroundColor: "black" }}
      >
        <CustomCursor
          useCustomCursor={useCustomCursor}
          cursorRef={cursorRef}
          text={cursorText}
        />
        <div
          style={{
            opacity: !activeCard || film.id === activeCard ? 1 : 0.5,
          }}
        >
          <Img
            width="40vw"
            aspectRatio="7/5"
            src={filmContent.thumbnail.filename}
            alt={filmContent.thumbnail.alt}
            blur={filmContent.thumbnail.blur}
          />
        </div>
      </div>
    </div>
  );
}

export default FilmCard;

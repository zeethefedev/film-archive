"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import component from "../../style/component.module.css";
import { useRouter } from "next/navigation";

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
      className={`cursor ${useCustomCursor && component.pointed}`}
      style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
    >
      {text}
    </div>
  );
}

function FilmCard({ film }) {
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
      <div>FilmCard</div>
      <div>{filmContent.displayName}</div>
      <div
        ref={cursorRef}
        className={component.filmCardWrapper}
        onMouseEnter={handleHoverImage}
        onMouseLeave={handleReset}
        onClick={handleClickImage}
      >
        <CustomCursor
          useCustomCursor={useCustomCursor}
          cursorRef={cursorRef}
          text={cursorText}
        />
        <img
          width={500}
          height={500}
          src={filmContent.thumbnail.filename}
          alt={filmContent.thumbnail.alt}
        />
      </div>
    </div>
  );
}

export default FilmCard;

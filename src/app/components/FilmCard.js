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

  const router = useRouter();

  const handleHoverImage = () => {
    setUseCustomCursor(true);
    setCursorText(film.displayName);
  };

  const handleReset = () => {
    setUseCustomCursor(false);
    setCursorText();
  };

  const handleClickImage = () => {
    router.push(`/film/${film.name}`);
  };

  return (
    <div>
      <div>FilmCard</div>
      <div>{film.displayName}</div>
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
        <Image width={500} height={500} src={film.thumbnail} alt={film.name} />
      </div>
    </div>
  );
}

export default FilmCard;

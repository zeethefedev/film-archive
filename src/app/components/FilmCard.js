"use client";

import React, { useEffect, useRef, useState } from "react";
import component from "../../style/component.module.css";
import { useRouter } from "next/navigation";
import Img from "./generics/Img";

import { motion } from "framer-motion";

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

  const customCursorClass =
    "absolute z-10 whitespace-nowrap flex items-center gap-1 beige";

  const pointedClass = "w-2 h-2 bg-beige rounded-full";

  return (
    <div
      className={`cursor ${useCustomCursor ? customCursorClass : ""}`}
      style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
    >
      <div className={`${useCustomCursor ? pointedClass : ""}`}></div>
      <div>{text}</div>
    </div>
  );
}

function FilmCard({ film, activeCard, isSmall, textColor }) {
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
      >
        {!isSmall && (
          <CustomCursor
            useCustomCursor={useCustomCursor}
            cursorRef={cursorRef}
            text={cursorText}
          />
        )}
        <div
          className={component.imageCard}
          style={{
            opacity: !activeCard || film.id === activeCard ? 1 : 0.5,
            transition: "opacity 300ms ease-in-out",
          }}
        >
          <Img
            width={!isSmall && "40vw"}
            aspectRatio="7/5"
            src={`${filmContent.thumbnail.filename}/m/700x500`}
            alt={filmContent.thumbnail.alt}
            priority
            loading="eager"
          />
          {isSmall && (
            <motion.div
              className="button-text text-center"
              style={{ color: textColor }}
            >
              {filmContent.displayName}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilmCard;

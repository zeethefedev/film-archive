"use client";

import React, { useEffect, useRef, useState } from "react";
import PhotoViewer from "./PhotoViewer";

import component from "../../style/component.module.css";
import IconButton from "./generics/IconButton";
import { motion } from "framer-motion";

function ImageSlide({ steps, active = 0, isSmall, handleShowFullscreen }) {
  const [activeStep, setActiveStep] = useState(active);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  //arrow left/right trigger - should remove this for mobile
  const [pressed, setPressed] = useState(false);
  const handleKeyEvent = (event) => {
    setPressed(true);
    if (event.code === "ArrowRight") {
      handleNext();
    }
    if (event.code === "ArrowLeft") {
      if (activeStep !== 0) handleBack();
    }
  };

  const handleResetKeyEvent = () => {
    setPressed(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyEvent);
    window.addEventListener("keyup", handleResetKeyEvent);

    return () => {
      window.removeEventListener("keydown", handleKeyEvent);
      window.removeEventListener("keyup", handleResetKeyEvent);
    };
  }, [pressed]);

  //drag animation
  const blogList = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const blogListWidth =
      blogList.current.scrollWidth - blogList.current.offsetWidth;
    setWidth(blogListWidth);
  }, []);

  return (
    <motion.div
      className={`hide-scrollbar ${component.slideWrapper}`}
      ref={blogList}
    >
      {!isSmall && (
        <IconButton
          disabled={activeStep === 0}
          onClick={handleBack}
          icon="back"
        />
      )}
      <motion.div
        className={component.imageListWrapper}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {steps.map((step, index) => (
          <div
            className={component.imageOuterWrapper}
            key={index}
            style={{
              translate: isSmall ? "none" : `${-100 * activeStep}%`,
              transition: "all 300ms ease-in-out",
            }}
          >
            <div className={component.imageInnerWrapper}>
              <div className="flex items-end justify-end">
                <PhotoViewer isSmall={isSmall} fullscreen photo={step} />
                <IconButton
                  onClick={handleShowFullscreen}
                  icon="full-screen-exit"
                  className="absolute z-10"
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      {!isSmall && <IconButton onClick={handleNext} icon="next" />}
    </motion.div>
  );
}

export default ImageSlide;

"use client";

import React, { useState } from "react";
import PhotoViewer from "./PhotoViewer";

import component from "../../style/component.module.css";
import IconButton from "./generics/IconButton";

function ImageSlide({
  steps,
  wrapperStyle,
  imageWrapperStyle,
  imageStyle,
  active = 0,
  isSmall,
  handleShowFullscreen,
}) {
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

  return (
    <div className={component.slideWrapper} style={{ ...wrapperStyle }}>
      {!isSmall && (
        <IconButton
          disabled={activeStep === 0}
          onClick={handleBack}
          icon="back"
        />
      )}
      <div className={component.imageListWrapper} style={imageWrapperStyle}>
        {steps.map((step, index) => (
          <div
            className={component.imageOuterWrapper}
            key={index}
            style={{
              translate: `${-100 * activeStep}%`,
              transition: "all 300ms ease-in-out",
              ...imageStyle,
            }}
          >
            <div className={component.imageInnerWrapper}>
              <div className={component.image}>
                <PhotoViewer isSmall={isSmall} fullscreen photo={step} />
                <IconButton
                  onClick={handleShowFullscreen}
                  icon="full-screen-exit"
                  buttonStyle={{ position: "absolute", zIndex: 10 }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {!isSmall && <IconButton onClick={handleNext} icon="next" />}
      {isSmall && (
        <div className={component.buttonWrapper}>
          <IconButton
            disabled={activeStep === 0}
            onClick={handleBack}
            icon="back"
          />
          <IconButton onClick={handleNext} icon="next" />
        </div>
      )}
    </div>
  );
}

export default ImageSlide;

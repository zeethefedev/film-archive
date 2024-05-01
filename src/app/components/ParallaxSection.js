import React from "react";
import component from "../../style/component.module.css";

function ParallaxSection() {
  return (
    <div>
      <p>Scroll Up and Down this page to see the parallax scrolling effect.</p>
      <div className={component.parallax}></div>
      <div style={{ backgroundColor: "red", fontSize: 36 }}>
        Scroll Up and Down this page to see the parallax scrolling effect. This
        div is just here to enable scrolling. Tip: Try to remove the
        background-attachment property to remove the scrolling effect.
      </div>
    </div>
  );
}

export default ParallaxSection;

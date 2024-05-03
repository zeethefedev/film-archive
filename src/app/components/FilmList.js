"use client";

import React, { useEffect, useRef, useState } from "react";
import FilmCard from "./FilmCard";
import component from "../../style/component.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FilmList({ films }) {
  const targetRef = useRef();
  const containerRef = useRef();

  const [containerHeight, setContainerHeight] = useState("auto");

  useEffect(() => {
    const container = containerRef?.current.offsetWidth;
    setContainerHeight(container);
  }, [containerRef]);

  useGSAP(
    () => {
      let cards = gsap.utils.toArray("#card");

      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#container",
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 1),
          end: () => "+=" + document.querySelector("#container").offsetWidth,
        },
      });
    },
    { scope: targetRef }
  );

  return (
    <div ref={targetRef}>
      {/* <h1>FilmList</h1> */}
      <div className={`${component.horizontalScrollWrapper}`}>
        <div
          ref={containerRef}
          id="container"
          className={component.cardWrapper}
        >
          {films.map((film, index) => (
            <div key={index} id="card">
              <FilmCard film={film} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: containerHeight }}>
        nsectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
        interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
        venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
        vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
        ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
        urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
        nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
        venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
        gravida venenatis. Integer fringilla congue eros non fermentum. Sed
        dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam
        velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
        scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
        congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
        aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio.
        Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc
        sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
        sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
        tellus gravida venenatis. Integer fringilla congue eros non fermentum.
        Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
        diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
        vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
        ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
        augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
        in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
        congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
        In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
        dui eget tellus gravida venenatis. Integer fringilla congue eros non
        fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus.
        Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
        lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
        Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
        luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
        ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
        hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
        dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
        turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla
        congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras
        ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
        interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
        venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
        vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
        ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
        urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
        nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
        venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
        gravida venenatis. Integer fringilla congue eros non fermentum. Sed
        dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam
        velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
        vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
        ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
        augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
        in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
        congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
        In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
        dui eget tellus gravida venenatis. Integer fringilla congue eros non
        fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus.
        Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
        lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
        Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
        luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
        ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
        hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
        dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
        turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla
        congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras
        ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
        interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
        venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
        vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
        ligula, fa
      </div>
    </div>
  );
}

export default FilmList;

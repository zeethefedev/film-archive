"use client";

import React, { useRef } from "react";
import FilmCard from "./FilmCard";
import component from "../../style/component.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

function FilmList({ filmRolls }) {
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-150%"]);

  return (
    <div ref={targetRef}>
      {/* <h1>FilmList</h1> */}
      <div className={`${component.horizontalScrollWrapper}`}>
        <motion.div style={{ x }} className={component.cardWrapper}>
          {filmRolls.map((film, index) => (
            <div key={index}>
              <FilmCard film={film} />
            </div>
          ))}
        </motion.div>
      </div>
      <div>
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

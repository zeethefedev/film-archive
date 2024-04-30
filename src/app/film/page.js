// import React from 'react'
import styles from "../../style/page.module.css";
import { getFilmRolls } from "../api/film.api";

async function Film() {
  const filmRolls = await getFilmRolls();
  return (
    <div className={styles.main}>
      <h1>Film is not dead</h1>
      <div>
        {filmRolls.map((roll) => (
          <div key={roll.id}>{roll.title}</div>
        ))}
      </div>
    </div>
  );
}

export default Film;

// import Image from "next/image";
import styles from "../style/page.module.css";
import FilmList from "./components/FilmList";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <main
    // className={styles.main}
    >
      {/* <h1>Hello</h1> */}
      <Landing />
    </main>
  );
}

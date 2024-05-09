import styles from "../../style/page.module.css";
import { redirect } from "next/navigation";

async function Film() {
  return <div className={styles.main}>{redirect("/")}</div>;
}

export default Film;

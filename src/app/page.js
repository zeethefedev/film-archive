import { getFilmList } from "./api/film.api";
import Landing from "./components/Landing";

export default async function Home() {
  const filmList = await getFilmList();

  return (
    <main>
      <Landing films={filmList} />
    </main>
  );
}

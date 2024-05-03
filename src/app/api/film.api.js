import { notFound } from "next/navigation";
import { getBaseUrl, getFilmData, getFilmUrl } from "./method.api";
const BASE_URL = process.env.BASE_URL;
const API_URL = getBaseUrl("draft");
const REVALIDATE = 60;

export async function getFilmRolls() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`${BASE_URL}/film-rolls`, {
    next: { revalidate: REVALIDATE },
  });

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  return data;
}

export async function getFilmList() {
  const res = await fetch(API_URL, {
    next: { revalidate: REVALIDATE },
  });

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const filmListData = await data.stories.map((film) => getFilmData(film));

  return filmListData;
}

export async function getFilm(filmName) {
  //api.storyblok.com/v2/cdn/stories/kodak-gold-200-p2?version=draft&token=y0JPbXgpCg7VYB7dJnPQiQtt&cv=1714748420
  const FILM_URL = getFilmUrl(filmName, "draft");
  const res = await fetch(FILM_URL, {
    next: { revalidate: REVALIDATE },
  });
  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const filmData = await getFilmData(data.story);

  return filmData;
}

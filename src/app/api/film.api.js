import { notFound } from "next/navigation";
import { getBaseUrl, getFilmData, getFilmUrl } from "./method.api";

const API_VERSION =
  process.env.NODE_ENV === "development" ? "draft" : "published";
const API_URL = getBaseUrl(API_VERSION);
const REVALIDATE = 60;
const MAPI_URL = process.env.NEXT_PUBLIC_MAPI_URL;
const AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN;

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
  const FILM_URL = getFilmUrl(filmName, API_VERSION);

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

export async function postMessage(message) {
  const date = new Date();
  const dateString = `${date.getDate()}-${date.getMonth()}-${date.getYear()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
  const bodyData = {
    story: {
      name: dateString,
      slug: dateString,
      content: {
        component: "message",
        data: message,
        _uid: process.env.MESSAGE_ID,
      },
    },
  };

  let submitted = false;
  const res = await fetch(MAPI_URL, {
    headers: {
      Authorization: AUTH_TOKEN,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(bodyData),
  });

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  submitted = await res.ok;

  return { data, submitted };
}

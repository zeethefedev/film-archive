import { notFound } from "next/navigation";
import { getBaseUrl, getFilmData, getFilmUrl } from "./method.api";
import { dynamicBlurDataUrl } from "../components/generics/blurDataUrl";
const API_URL = getBaseUrl("draft");
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

  data.stories.forEach(
    async (film, index) =>
      await dynamicBlurDataUrl(film.content.thumbnail.filename).then((blur) => {
        filmListData[index].content.thumbnail.blur = blur;
      })
  );

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

  data.story.content.photos.forEach(
    async (photo, index) =>
      await dynamicBlurDataUrl(photo.filename).then((blur) => {
        filmData.content.photos[index].blur = blur;
      })
  );

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
        _uid: "5fa21989-755d-4b29-b536-e8c51f34db17",
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

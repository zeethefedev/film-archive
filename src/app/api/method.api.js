export const getBaseUrl = (mode = "published") => {
  if (!["published", "draft"].includes(mode)) return;

  const API = process.env.API_URL;
  const token =
    mode === "draft" ? process.env.PREVIEW_TOKEN : process.env.PUBLIC_TOKEN;
  const url = `${API}/stories/?content_type=film&version=${mode}&token=${token}`;
  return url;
};

export const getFilmUrl = (filmName, mode = "published") => {
  if (!["published", "draft"].includes(mode)) return;

  const API = process.env.API_URL;
  const token =
    mode === "draft" ? process.env.PREVIEW_TOKEN : process.env.PUBLIC_TOKEN;
  const url = `${API}/stories/${filmName}?content_type=film&version=${mode}&token=${token}`;
  return url;
};

const getPhotoData = (photo) => {
  const photoData = {
    id: photo.id,
    alt: photo.alt,
    filename: photo.filename,
  };
  return photoData;
};

export const getFilmData = (film) => {
  const filmData = {
    id: film.id,
    name: film.name,
    full_slug: film.full_slug,
    content: {
      ...film.content,
      photos: film.content.photos.map((photo) => getPhotoData(photo)),
      thumbnail: getPhotoData(film.content.thumbnail),
    },
  };

  return filmData;
};

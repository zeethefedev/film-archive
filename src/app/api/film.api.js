import { notFound } from "next/navigation";

const BASE_URL = process.env.BASE_URL;

export async function getFilmRolls() {
  const res = await fetch(`${BASE_URL}/posts`, { next: { revalidate: 0 } });

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  return data;
}

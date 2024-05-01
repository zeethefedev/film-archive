import { notFound } from "next/navigation";
const BASE_URL = process.env.BASE_URL;
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

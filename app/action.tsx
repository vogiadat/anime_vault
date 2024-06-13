"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

interface ParamFetch {
  page?: number;
  limit?: number;
  order?: "popularity" | "id";
}

export const fetchAnime = async (params: ParamFetch) => {
  const { page, limit = 8, order = "popularity" } = params;
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=${order}`
  );
  const data = await res.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

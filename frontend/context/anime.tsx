// anime.js
"use client";
import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { Anime, AnimeResponse, AnimeContextType } from "@/types";

export const CreateContext = createContext<AnimeContextType | undefined>(
  undefined
);

export const AnimeAPI = ({ children }: { children: ReactNode }) => {
  const [AnimeList, setAnimeList] = useState<Anime[]>([]);
  const [AnimeNow, setAnimeNow] = useState<Anime[]>([]);
  const [searchAnime, setSearchAnime] = useState([]);
  const [TopAnime, setTopAnime] = useState([]);
  const [TopMovie, setTopMovie] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const search = async (search: string) => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?q=${search}&limit=20`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSearchAnime(data.data);
    } catch (error) {
      //@ts-expect-error rrr
      console.log(error.message);
    }
  };

  const fetchAnime = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?page=${page}&limit=15`
      );
      const data: AnimeResponse = await response.json();
      setAnimeList((prev) => [...prev, ...data.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnime(page);
  }, [page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const fetchAnimeNow = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.jikan.moe/v4/seasons/now?sfw`);
      const data: AnimeResponse = await response.json();
      setAnimeNow(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimeNow();
  }, [page]);

  const fetchTopAnimeData = async () => {
    try {
      const response = await fetch(
        "https://api.jikan.moe/v4/top/anime?type=tv&limit=5"
      ); // Example endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTopAnime(data.data);
    } catch (error) {
      //@ts-expect-error rrr
      console.log(error.message);
    }
  };

  const fetchTopMovieData = async () => {
    try {
      const response = await fetch(
        "https://api.jikan.moe/v4/top/anime?type=movie&limit=5"
      ); // Example endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTopMovie(data.data);
    } catch (error) {
      //@ts-expect-error rrr
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTopAnimeData();
  }, []);

  useEffect(() => {
    fetchTopMovieData();
  }, []);

  return (
    <CreateContext.Provider
      value={{
        AnimeList,
        AnimeNow,
        search,
        searchAnime,
        fetchTopAnimeData,
        TopAnime,
        fetchTopMovieData,
        TopMovie,
        loading,
        loadMore,
      }}
    >
      <div>{children}</div>
    </CreateContext.Provider>
  );
};

export const useAnime = () => {
  const context = useContext(CreateContext);
  if (!context) {
    throw new Error("useAnime must be used within an AnimeProvider");
  }
  return context;
};

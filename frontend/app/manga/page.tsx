"use client";
import React, { useState, useEffect } from "react";
import AutoPlaySwipeable from "@/component/AutoPlaySwipeable";
import Link from "next/link";
import { motion } from "framer-motion";
import { Manga, MangaResponse } from "@/types";
import Card from "@/component/Card";

type Theme = { url: string; c: string; c2: string };

const Page = () => {
  const BGUrl: Theme[] = [
    {
      url: "./p14.jpg",
      c: "text-orange-600",
      c2: "w-40 h-12 bg-orange-600 flex justify-center items-center rounded-2xl font-semibold",
    },
    {
      url: "/p11.jpg",
      c: "text-cyan-400",
      c2: "w-40 h-12 bg-cyan-400 text-black flex justify-center items-center rounded-2xl font-semibold",
    },
    {
      url: "/p12.jpg",
      c: "text-purple-900",
      c2: "w-40 h-12 bg-purple-900 flex justify-center items-center rounded-2xl font-semibold",
    },
    {
      url: "/p15.jpg",
      c: "text-pink-900",
      c2: "w-40 h-12 bg-pink-900 flex justify-center items-center rounded-2xl font-semibold",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  const [MangaList, setMangaList] = useState<Manga[]>([]);
  const [MangaNow, setMangaNow] = useState<Manga[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchManga = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/manga?page=${page}&limit=15`
      );
      const data: MangaResponse = await response.json();
      setMangaList((prev) => [...prev, ...data.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchManga(page);
  }, [page]);

  const fetchMangaNow = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.jikan.moe/v4/seasons/now?sfw`);
      const data: MangaResponse = await response.json();
      const seasonalManga = data.data.filter((item) => item.type === "manga");
      setMangaNow(seasonalManga);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMangaNow();
  }, [page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <section className="h-screen w-full bg-black flex flex-rox">
        <div className="h-screen w-2/5 hidden sm:flex justify-center items-center bg">
          <div className="size-5/6 rounded-3xl overflow-hidden">
            <AutoPlaySwipeable
              theme={BGUrl}
              onIndexChange={handleIndexChange}
            />
          </div>
        </div>
        <div className="h-screen w-full sm:w-3/5 flex justify-start items-center select-none">
          <div className="flex flex-col">
            <div className="text-4xl font-extrabold sm:text-7xl">
              Hi there! <br /> Welecom in here <br />{" "}
              <span className={BGUrl[currentIndex].c}>Manga</span> word!
            </div>
            <p className="text-xs sm:text-base sm:w-1/2 text-zinc-500 my-6">
              Manga opens the door to limitless adventures, where every page is
              filled with breathtaking art and compelling stories. From
              heartwarming romances to intense battles, each panel pulls you
              deeper into its world. With rich characters and immersive
              storytelling, manga isn’t just something you read—it’s an
              experience you feel. Dive in and let your imagination run wild!
            </p>
            <Link href={"#more"} className="w-40 h-12">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={BGUrl[currentIndex].c2}
              >
                Expolre more
              </motion.div>{" "}
            </Link>
          </div>
        </div>
      </section>
      <section id="more" className="w-full h-max">
        <div>
          <div className="h-max w-full flex justify-start px-5 items-center text-3xl sm:text-5xl font-semibold">
            Manga of this seassion
          </div>
          <div className="w-full h-max p-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {MangaNow &&
              MangaNow.map((anime) => (
                //@ts-expect-error ggg
                <Card key={anime.mal_id} anime={anime} type="manga" />
              ))}
          </div>
          <div className="h-max w-full flex justify-start px-5 items-center text-3xl sm:text-5xl font-semibold">
            More Manga
          </div>
          <div className="w-full h-max p-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {MangaList.map((anime, index) => (
              //@ts-expect-error ggg
              <Card key={index} anime={anime} type={"manga"} />
            ))}
          </div>

          <button
            onClick={loadMore}
            disabled={loading}
            className="h-11 w-32 bg-neutral-700 rounded-2xl ml-5"
          >
            {loading ? <p>Loading...</p> : <p>Load More</p>}
          </button>
        </div>
      </section>
    </>
  );
};

export default Page;

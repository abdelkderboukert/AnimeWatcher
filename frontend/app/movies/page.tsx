"use client";
import React, { useState, useEffect } from "react";
import AutoPlaySwipeable from "@/component/AutoPlaySwipeable";
import Link from "next/link";
import { motion } from "framer-motion";
import { Anime, AnimeResponse } from "@/types";
import Card from "@/component/Card";

type Theme = { url: string; c: string; c2: string };

const Page = () => {
  const BGUrl: Theme[] = [
    {
      url: "./p10.jpg",
      c: "text-amber-500",
      c2: "w-40 h-12  bg-amber-500 flex justify-center items-center rounded-2xl font-semibold",
    },
    {
      url: "./p5.jpg",
      c: "text-orange-600",
      c2: "w-40 h-12  bg-orange-600 flex justify-center items-center rounded-2xl font-semibold",
    },
    {
      url: "/p6.jpg",
      c: "text-rose-800",
      c2: "w-40 h-12 bg-rose-800 text-black flex justify-center items-center rounded-2xl font-semibold",
    },
    {
      url: "/p7.jpg",
      c: "text-sky-600",
      c2: "w-40 h-12 bg-sky-600 flex justify-center items-center rounded-2xl font-semibold",
    },
    {
      url: "/p8.jpg",
      c: "text-violet-600",
      c2: "w-40 h-12 bg-violet-600 flex justify-center items-center rounded-2xl font-semibold",
    },
    {
      url: "/p9.jpg",
      c: "text-indigo-500",
      c2: "w-40 h-12 bg-indigo-500 flex justify-center items-center rounded-2xl font-semibold",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [MovieList, setMovieList] = useState<Anime[]>([]);

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
    console.log("Current Index from child:", index); // You can handle the index as needed
  };
  console.log(currentIndex);

  const fetchMovie = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?page=${page}&limit=15&type=movie`
      );
      const data: AnimeResponse = await response.json();
      setMovieList((prev) => [...prev, ...data.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie(page);
  }, [page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <>
      <section className="h-screen w-full bg-black flex flex-rox">
        <div className="h-screen w-2/5 hidden sm:flex justify-center items-center">
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
              <span className={BGUrl[currentIndex].c}>Movies</span> word!
            </div>
            <p className="text-xs sm:text-base sm:w-1/2 text-zinc-500 my-6">
              Movies transport us to different worlds, where dreams come alive
              and stories unfold in the most magical ways. With breathtaking
              visuals, powerful emotions, and unforgettable characters, every
              film is a journey worth taking. From heartwarming moments to
              thrilling adventures, movies have the power to inspire, move, and
              captivate. Sit back, press play, and let the magic of cinema take
              over!
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
            More Movies
          </div>
          <div className="w-full h-max p-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {MovieList.map((anime,index) => (
              <Card key={index} anime={anime} type={"movies"} />
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

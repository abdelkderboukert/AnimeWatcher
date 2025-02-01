import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import Card from "@/component/Card";
import { Anime } from "@/types";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useAnime } from "@/context/anime";

const Swipeable = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { TopAnime, TopMovie } = useAnime();

  const views = [
    <Views TopList={TopAnime || []} k={0} key={0} type="anime" />,
    <Views TopList={TopMovie || []} k={1} key={1} type="movies" />,
    <Views TopList={TopMovie || []} k={2} key={2} type="manga" />,
  ];

  const button = ["Anime", "Movies", "Manga"];

  return (
    <div className="h-screen w-full">
      <div className="h-14 w-full flex bg-black justify-center items-center">
        <div className="w-max h-full flex justify-center items-center flex-row text-lg font-semibold text-white">
          {button.map((item, index) => (
            <div key={index} className="relative w-1/2 mx-5">
              <button className="" onClick={() => setActiveIndex(index)}>
                <motion.p
                  className=""
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.1 }}
                  animate={{
                    scale: activeIndex === index ? 1.3 : 1,
                    opacity: activeIndex === index ? 1 : 0.5,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item}
                </motion.p>
              </button>
            </div>
          ))}
        </div>
      </div>

      <SwipeableViews index={activeIndex}>
        {views.map((view) => view)}
      </SwipeableViews>
    </div>
  );
};

const Views = ({ TopList, k, type }: { TopList: Anime[]; k: number; type: string }) => {
  const theme = [
    {
      c1: "text-2xl sm:text-5xl text-emerald-500 font-bold",
      c2: "w-full h-full col-start-1 bg-green-600 border border-emerald-500 dark:bg-black rounded-2xl flex justify-center items-center select-none ml-auto",
      w: "Anime",
      s: "Enoy your time",
      link: "/anime",
    },
    {
      c1: "text-2xl sm:text-5xl text-amber-500 font-bold ",
      c2: "w-full h-full col-start-1 bg-green-600 border border-amber-500 dark:bg-black rounded-2xl flex justify-center items-center select-none ml-auto",
      w: "Movies",
      s: "Where you'll have the best hour",
      link: "/movies",
    },
    {
      c1: "text-2xl sm:text-5xl text-orange-600 font-bold",
      c2: "w-full h-full col-start-1 bg-green-600 border border-orange-600 dark:bg-black rounded-2xl flex justify-center items-center select-none ml-auto",
      w: "Manga",
      s: "And let yourself go",
      link: "manga",
    },
  ];
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };
  return (
    <div
      key={k}
      className="w-full h-[calc(100vh-56px)] items-end gap-1 grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 bg-black"
    >
      <div className="row-start-1 text-zinc-500 flex items-center p-5 sm:row-start-auto sm:col-start-1 h-[calc(100vh-56px)] w-full bg-repeat bg-cover overflow-hidden select-none">
        <div className="flex flex-col">
          <h1 className="text-4xl sm:text-7xl font-semibold">
            Anime&nbsp;Watcher
          </h1>
          <motion.p
            variants={variants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            className="sm:text-2xl text-gray-500"
          >
            Welcom in
          </motion.p>
          <br />
          <motion.h1
            variants={variants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            className={theme[k].c1}
          >
            {theme[k].w}
          </motion.h1>
          <br />
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="sm:text-2xl text-gray-500"
          >
            {theme[k].s}
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            className="h-16 w-full grid grid-cols-2 space-x-3 gap-3 justify-center items-center mt-3"
          >
            <Link className="w-full h-3/4" href={`${theme[k].link}`}>
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className={theme[k].c2}
              >
                Find out more &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#D9D9D9"
                >
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={{
          hidden1: { opacity: 0, y: 50 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.5,
              duration: 1,
            },
          },
        }}
        initial="hidden1"
        animate="show"
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
        className=" relative row-start-2 sm:row-start-auto sm:col-start-2 h-screen sm:h-[calc(100vh-56px)] w-full px-5 sm:overflow-scroll grid gap-4"
      >
        <div className="sticky top-5 sm:-top-5 left-0 w-full h-full bg-gradient-to-b from-black via-black to-transparent text-white p-4 z-10" />
        {TopList
          ? TopList.map((anime: Anime, index: number) => (
              <Card key={index} anime={anime} type={type} />
            ))
          : ["1", "2", "3", "4"].map((i: string, index: number) => (
              <div
                key={index}
                className="h-52 w-full rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-400 overflow-hidden"
              ></div>
            ))}
        <div className=" sticky -bottom-2 left-0 w-full h-full bg-gradient-to-b from-transparent via-black to-black p-4 z-50" />
      </motion.div>
    </div>
  );
};

export default Swipeable;

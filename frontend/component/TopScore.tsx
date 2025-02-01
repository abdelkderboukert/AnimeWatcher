import React from "react";
import { useEffect, useState } from "react";
// import { CreateContext } from "@/context/anime";
// import Card from "./Card";
// import { Anime } from "@/types";
import * as motion from "motion/react-client";
import Swipeable from "./Swipeable";
import Link from "next/link";

function TopScore() {
  // const { fetchTopAnimeData, TopAnime } = useContext(CreateContext) || {};
  // useEffect(() => {
  //   fetchTopAnimeData();
  // }, [fetchTopAnimeData]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined and set isMobile accordingly
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  const theme = [
    { color: "emerald-500", w: "Anime", s: "Enoy your time", link: "/anime" },
    {
      color: "amber-500",
      w: "Movies",
      s: "Where you'll have the best hour",
      link: "/movies",
    },
    {
      color: "orange-600",
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
    <>
      {isMobile ? (
        <>
          {theme.map((t, index) => (
            <section
              key={index}
              className="w-full h-screen bg-blackOverlay gap-1 grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 px-3"
            >
              <div className="sm:row-start-auto sm:col-start-1 h-screen w-full bg-repeat bg-cover overflow-hidden">
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
                    className={` text-2xl sm:text-5xl text-${t.color} font-bold:`}
                  >
                    {t.w}
                  </motion.h1>
                  <br />
                  <motion.p
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="sm:text-2xl text-gray-500"
                  >
                    {t.s}
                  </motion.p>
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                    className="h-16 w-full grid grid-cols-2 space-x-3 gap-3 justify-center items-center mt-3"
                  >
                    <Link className="w-full h-3/4" href={`${t.link}`}>
                      <motion.div
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        className={`w-full h-full col-start-1 bg-green-600 border border-${t.color} dark:bg-black rounded-2xl flex justify-center items-center select-none ml-auto`}
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
              {/* <motion.div
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
                className=" relative row-start-2 sm:row-start-auto sm:col-start-2 h-screen sm:h-full w-full p-5 sm:overflow-scroll grid gap-4 bg-blackOverlay"
              >
                <div className=" sticky -top-5 left-0 w-full h-full bg-gradient-to-b from-black via-black to-transparent text-white p-4 z-10" />
                {TopAnime
                  ? TopAnime.slice(0, 4).map((anime: Anime, index: number) => (
                      <Card key={index} anime={anime} />
                    ))
                  : ["1", "2", "3", "4"].map((i: string, index: number) => (
                      <div
                        key={index}
                        className="h-52 w-full rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-400 overflow-hidden"
                      ></div>
                    ))}
                <div className=" sticky -bottom-5 left-0 w-full h-full bg-gradient-to-b from-transparent via-black to-black p-4 z-50" />
              </motion.div> */}
            </section>
          ))}
        </>
      ) : (
        <section className="w-full h-screen">
          <Swipeable />
        </section>
      )}
    </>
  );
}

export default TopScore;

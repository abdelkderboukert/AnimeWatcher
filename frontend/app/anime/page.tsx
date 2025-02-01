"use client";
import React, { useState } from "react";
import AutoPlaySwipeable from "@/component/AutoPlaySwipeable";
import Link from "next/link";
import { motion } from "framer-motion";
import ListFetch from "@/component/ListFetch";

type Theme = { url: string; c: string; c2: string };

const Page = () => {
  const BGUrl: Theme[] = [
    {
      url: "/p3.jpg",
      c: "text-emerald-700",
      c2: "w-40 h-12 bg-emerald-700 flex justify-center items-center rounded-2xl font-semibold",
    },
    {
      url: "./t.jpg",
      c: "text-red-700",
      c2: "w-40 h-12 bg-red-700 flex justify-center items-center rounded-2xl font-semibold",
    },
    {
      url: "/p1.jpg",
      c: "text-amber-200",
      c2: "w-40 h-12 bg-amber-200 text-black flex justify-center items-center rounded-2xl font-semibold",
    },
    {
      url: "/p2.jpg",
      c: "text-red-900",
      c2: "w-40 h-12 bg-red-900 flex justify-center items-center rounded-2xl font-semibold",
    },
    {
      url: "/p4.jpg",
      c: "text-rose-300",
      c2: "w-40 h-12  bg-rose-300 text-black flex justify-center items-center rounded-2xl font-semibold",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
    console.log("Current Index from child:", index); // You can handle the index as needed
  };

  return (
    <>
      <section className="h-screen w-full bg-black flex flex-rox select-none">
        <div className="h-screen w-2/5 hidden sm:flex justify-center items-center">
          <div className="size-5/6 rounded-3xl overflow-hidden">
            <AutoPlaySwipeable
              theme={BGUrl}
              onIndexChange={handleIndexChange}
            />
          </div>
        </div>
        <div className="h-screen w-full sm:w-3/5 flex justify-start items-center">
          <div className="flex flex-col">
            <div className="text-4xl font-extrabold sm:text-7xl">
              Hi there! <br /> Welecom in here <br />{" "}
              <span className={BGUrl[currentIndex].c}>Anime</span> word!
            </div>
            <p className="text-xs sm:text-base sm:w-1/2 text-zinc-500 my-6">
              Embark on unforgettable journeys, where every episode brings a new
              world to explore. Get lost in stories filled with heart-pounding
              action, deep emotions, and unforgettable characters. Anime isn’t
              just entertainment—it&apos;s an experience that ignites your
              imagination and stirs your soul. From the most epic battles to the
              tenderest moments, anime offers a perfect escape from reality.
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
        <ListFetch type="anime" />
      </section>
    </>
  );
};

export default Page;

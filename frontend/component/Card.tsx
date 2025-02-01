"use client";
import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { Anime } from "@/types";
import * as motion from "motion/react-client";
import Link from "next/link";

type AnimeDetailsProps = {
  anime: Anime;
  type: string | null;
};

const Card: React.FC<AnimeDetailsProps> = ({ anime, type }) => {
  const options = {
    scale: 1,
    speed: 1000,
    max: -10,
  };
  const airing = true;
  return (
    <Tilt
      className="h-56 rounded-xl border border-slate-400 bg-[#0e0e10] flex flex-row overflow-hidden select-none"
      options={options}
    >
      <div className="h-full w-2/5 p-2">
        <div
          className="bg-white size-full rounded-lg bg-repeat bg-cover bg-bottom"
          style={{
            backgroundImage: `url(${anime.images.jpg.large_image_url})`,
          }}
        >
          <div className="bg-blackOverlay w-full h-full"></div>
        </div>
      </div>
      <div className="h-full w-3/5 p-2">
        <div className="h-7 w-max rounded-md flex justify-center items-center border border-slate-400 p-1">
          {airing ? (
            <p className="text-sm text-slate-400 font-semibold">
              {anime.status}
            </p>
          ) : (
            <p className="text-sm text-yellow-600 font-semibold">
              {anime.status}
            </p>
          )}
        </div>
        <div className="text-xs mt-2 text-slate-500 w-full flex flex-row font-semibold">
          {anime.season ? (
            <p className="">
              {anime.season}&nbsp;{anime.aired.prop.from.year}
            </p>
          ) : null}
          {anime.season && anime.episodes ? (
            <p className="">&nbsp;●&nbsp;</p>
          ) : null}
          {anime.episodes ? (
            <p className="">{anime.episodes || "?"}&nbsp;Episodes</p>
          ) : null}
        </div>
        <h1 className="text-lg text-slate-300 truncate-multiline my-2">
          {anime.title_english ? anime.title_english : anime.title}
        </h1>

        <div className="cardAnime__rating svelte-f98ila">
          {anime.score ? (
            <div className="cardAnime__score svelte-f98ila">
              <div className="svelte-f98ila flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-star "
                >
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                </svg>
                &nbsp;
                {anime.score}
              </div>{" "}
              <small className="svelte-f98ila text-slate-400 font-semibold">
                {anime.scored_by} users
              </small>
            </div>
          ) : null}{" "}
          {anime.rank ? (
            <div className="cardAnime__rank svelte-f98ila">
              <div className="svelte-f98ila flex flex-row text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-has "
                >
                  <path d="M5 9l14 0"></path>
                  <path d="M5 15l14 0"></path>
                  <path d="M11 4l-4 16"></path>
                  <path d="M17 4l-4 16"></path>
                </svg>
                &nbsp;
                {anime.rank}
              </div>{" "}
              <small className="flex svelte-f98ila text-slate-400 font-semibold">
                Ranking
              </small>
            </div>
          ) : null}
        </div>
        <div className="h-10 w-full flex items-center justify-end mt-2">
          <Link
            href={`/${type}/${anime.mal_id}`}
            className="h-1/5 w-32 bg-black rounded-xl absolute bottom-3 right-3"
          >
            <div className="h-full w-full rounded-xl flex justify-center items-center">
              More details
            </div>
          </Link>
        </div>
      </div>
    </Tilt>
  );
};
//@ts-expect-error of typing
function Tilt(props) {
  const { options, children, ...rest } = props; // Destructure children from props
  const tilt = useRef(null);

  useEffect(() => {
    //@ts-expect-error of typing
    VanillaTilt.init(tilt.current, options);
    return () => {
      // Cleanup function to destroy the tilt instance
      if (tilt.current) {
        //@ts-expect-error of typing
        tilt.current.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return (
    <motion.div
      variants={{
        hidden: { y: 48, opacity: 0 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
      whileInView="show"
      ref={tilt}
      {...rest}
    >
      {children} {/* Render the children inside the div */}
    </motion.div>
  );
}

export default Card;
"use client";
import { Anime } from "@/types";
import React, { useState, useEffect } from "react";
import ProjectDetails from "@/component/AnimeDietails";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const [anime, setAnime] = useState<Anime>(); // Initialize as null
  const unwrappedParams = React.use(params);

  useEffect(() => {
    if (unwrappedParams) {
      const id = parseInt(unwrappedParams.id);

      const fetchAnime = async () => {
        const url = `https://api.jikan.moe/v4/anime/${id}`;
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setAnime(data.data); // Process the anime data here
        } catch (error) {
          console.error("There was a problem with the fetch operation:", error);
        }
      };

      fetchAnime();
    }
  }, [unwrappedParams]);
  console.log(anime)

  return (
    <div>
      {anime ? <ProjectDetails item={anime} /> : <p>Loading...</p>}
    </div>
  );
}

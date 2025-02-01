"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Code2, Star, ChevronRight, Layers } from "lucide-react";
import { Anime, Manga } from "@/types";

interface TechBadgeProps {
  tech: string;
}

const TechBadge = ({ tech }: TechBadgeProps) => {
  return (
    <div className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
      <div className="relative flex items-center gap-1.5 md:gap-2">
        <span className="text-xs md:text-sm font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors">
          {tech}
        </span>
      </div>
    </div>
  );
};

interface ProjectStatsProps {
  item: Anime | Manga;
}

const ProjectStats = ({ item }: ProjectStatsProps) => {
  const isAnime = "episodes" in item;

  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-black rounded-xl overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50 blur-2xl z-0" />

      <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-lg">
        <div className="bg-blue-500/20 p-1.5 md:p-2 rounded-full">
          <Code2
            className="text-blue-300 w-4 h-4 md:w-6 md:h-6"
            strokeWidth={1.5}
          />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-blue-200">
            {isAnime
              ? item.episodes || "Unknown"
              : (item as Manga).chapters || "Unknown"}
          </div>
          <div className="text-[10px] md:text-xs text-gray-400">
            {isAnime ? "Total Episodes" : "Total Chapters"}
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg">
        <div className="bg-purple-500/20 p-1.5 md:p-2 rounded-full">
          <Layers
            className="text-purple-300 w-4 h-4 md:w-6 md:h-6"
            strokeWidth={1.5}
          />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-purple-200">
            {isAnime
              ? (item as Anime).season || "Unknown"
              : (item as Manga).volumes || "Unknown"}
          </div>
          <div className="text-[10px] md:text-xs text-gray-400">
            {isAnime ? "Season" : "Volumes"}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProjectDetailsProps {
  item?: Anime | Manga | null;
}

const ProjectDetails = ({ item }: ProjectDetailsProps) => {
  if (!item) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 md:w-24 md:h-24 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          <h2 className="text-xl md:text-3xl font-bold text-white">
            Loading...
          </h2>
        </div>
      </div>
    );
  }

  // Type guards
  const isAnime = (item: Anime | Manga): item is Anime => "episodes" in item;
  const mediaType = isAnime(item)
    ? item.type === "TV"
      ? "anime"
      : "movies"
    : "manga";

  return (
    <div className="min-h-screen px-[2%] sm:px-0 relative overflow-hidden">
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
          <div className="flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn">
            <Link
              href={`/${mediaType}`}
              className="group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-white/5 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </Link>
            <div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-white/50">
              <span>{mediaType}</span>
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-white/90 truncate">{item.title}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-6 md:space-y-10 animate-slideInLeft">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                  {item.title}
                </h1>
                <div className="relative h-1 w-16 md:w-24">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm" />
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-base md:text-lg text-gray-300/90 leading-relaxed">
                  {item.synopsis}
                </p>
              </div>

              <ProjectStats item={item} />

              <div className="space-y-4 md:space-y-6">
                <h3 className="text-lg md:text-xl font-semibold text-white/90 mt-[3rem] md:mt-0 flex items-center gap-2 md:gap-3">
                  <Code2 className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                  Genres
                </h3>
                {item.genres?.length > 0 ? (
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {item.genres.map((genre) => (
                      <TechBadge key={genre.mal_id} tech={genre.name} />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm md:text-base text-gray-400 opacity-50">
                    No genres specified
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-6 md:space-y-10 animate-slideInRight">
              <div className="relative ml-auto sm:w-full sm:h-1/2 rounded-2xl justify-center items-center overflow-hidden border border-white/10 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {item.images.jpg && (
                  <>
                    <img
                      src={item.images.jpg.image_url}
                      alt={item.title}
                      className="size-full object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-300 rounded-2xl" />
                  </>
                )}
              </div>

              <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group">
                <h3 className="text-xl font-semibold text-white/90 flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                  Key Information
                </h3>
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold text-gray-800">
                    {item.title}
                  </h1>
                  <p className="text-gray-500 italic">
                    {item.title_english || "N/A"}
                  </p>
                  <p className="text-gray-500 italic">{item.title_japanese}</p>
                  <div className="mt-2">
                    <span className="text-sm font-medium text-gray-600">
                      Type:{" "}
                    </span>
                    <span className="text-sm text-gray-800">{item.type}</span>
                  </div>
                  {isAnime(item) ? (
                    <>
                      <div>
                        <span className="text-sm font-medium text-gray-600">
                          Episodes:{" "}
                        </span>
                        <span className="text-sm text-gray-800">
                          {item.episodes || "Unknown"}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <span className="text-sm font-medium text-gray-600">
                          Chapters:{" "}
                        </span>
                        <span className="text-sm text-gray-800">
                          {item.chapters || "Unknown"}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600">
                          Volumes:{" "}
                        </span>
                        <span className="text-sm text-gray-800">
                          {item.volumes || "Unknown"}
                        </span>
                      </div>
                    </>
                  )}
                  <div>
                    <span className="text-sm font-medium text-gray-600">
                      Status:{" "}
                    </span>
                    <span className="text-sm text-gray-800">{item.status}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">
                      {isAnime(item) ? "Aired:" : "Published:"}
                    </span>
                    <span className="text-sm text-gray-800">
                      {isAnime(item)
                        ? item.aired.string
                        : item.published.string}
                    </span>
                  </div>
                  {isAnime(item) ? (
                    <div>
                      <span className="text-sm font-medium text-gray-600">
                        Rating:{" "}
                      </span>
                      <span className="text-sm text-gray-800">
                        {item.rating}
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span className="text-sm font-medium text-gray-600">
                        Score:{" "}
                      </span>
                      <span className="text-sm text-gray-800">
                        {item.score}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.7s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;

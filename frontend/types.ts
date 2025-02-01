export type ImageFormats = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
};

export type Title = {
  type: string;
  title: string;
};

export type PublishedDate = {
  day: number;
  month: number;
  year: number;
};

export type PublishedType = {
  from: string;
  to: string;
  prop: {
    from: PublishedDate;
    to: PublishedDate;
  };
  string: string;
};

export type Author = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type Serialization = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type Genre = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

// Anime Type
export type Anime = {
  mal_id: number;
  url: string;
  images: {
    jpg: ImageFormats;
    webp: ImageFormats;
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: {
      image_url: string;
      small_image_url: string;
      medium_image_url: string;
      large_image_url: string;
      maximum_image_url: string;
    };
  };
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: string[];
  type: string; // e.g., "TV", "Movie", etc.
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  aired: {
    from: string | null;
    to: string | null;
    prop: {
      from: {
        day: number | null;
        month: number | null;
        year: number | null;
      };
      to: {
        day: number | null;
        month: number | null;
        year: number | null;
      };
    };
    string: string;
  };
  duration: string | null;
  rating: string | null;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string | null;
  background: string | null;
  season: string | null;
  year: number | null;
  broadcast: {
    day: string | null;
    time: string | null;
    timezone: string | null;
    string: string | null;
  };
  producers: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  licensors: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  studios: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  genres: Genre[];
  explicit_genres: Genre[];
  themes: Genre[];
  demographics: Genre[];
};

// Manga Type
export type Manga = {
  mal_id: number;
  url: string;
  images: {
    jpg: ImageFormats;
    webp: ImageFormats;
  };
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string; // "Manga"
  chapters: number;
  volumes: number;
  status: string;
  publishing: boolean;
  published: PublishedType;
  score: number;
  scored: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  authors: Author[];
  serializations: Serialization[];
  genres: Genre[];
  explicit_genres: Genre[];
  themes: Genre[];
  demographics: Genre[];
};


export type AnimeContextType = {
  AnimeList: Anime[];
  AnimeNow: Anime[];
  search: (search: string) => Promise<void>;
  searchAnime: Anime[];
  fetchTopAnimeData: () => Promise<void>;
  TopAnime: Anime[];
  fetchTopMovieData: () => Promise<void>;
  TopMovie: Anime[];
  loading: boolean;
  loadMore: () => void;
};
export interface AnimeResponse {
  data: Anime[];
}

export interface MangaResponse {
  data: Manga[];
}

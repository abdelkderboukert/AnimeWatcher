import Card from "./Card";
import { useAnime } from "@/context/anime";

const ListFetch= ({type}: {type:string}) => {
  const { AnimeList, loading, loadMore, AnimeNow } = useAnime();
  return (
    <div>
      <div className="h-max w-full flex justify-start px-5 items-center text-3xl sm:text-5xl font-semibold">
        {type} of this seassion
      </div>
      <div className="w-full h-max p-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {AnimeNow && AnimeNow.map((anime) => (
          <Card key={anime.mal_id} anime={anime} type={type} />
        ))}
      </div>
      <div className="h-max w-full flex justify-start px-5 items-center text-3xl sm:text-5xl font-semibold">
        More {type}
      </div>
      <div className="w-full h-max p-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {AnimeList.map((anime) => (
          <Card key={anime.mal_id} anime={anime} type={type} />
        ))}
      </div>
      
      <button onClick={loadMore} disabled={loading} className="h-11 w-32 bg-neutral-700 rounded-2xl ml-5">
        {loading? <p>Loading...</p> : <p>Load More</p>}
      </button>
    </div>
  );
};

export default ListFetch;

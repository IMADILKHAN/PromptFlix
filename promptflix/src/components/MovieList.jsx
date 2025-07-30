import MovieCard from "./MovieCard";

export default function MovieList({title,movies}){
    console.log("from movieList");
    console.log(movies);
    if(!movies || movies.length==0){
        return <div>Loading.....</div>
    }
    console.log("from movieList");
    return (
        <div className="px-6 py-4">
  <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 border-l-4 border-red-600 pl-4">
    {title}
  </h1>

  <div className="relative group">
    <div className="flex overflow-x-scroll no-scrollbar gap-4 transition-transform duration-300">
      {movies.map((movie) => (
        <MovieCard key={movie.id} image_url={movie.backdrop_path} />
      ))}
    </div>
  </div>
</div>

    )
}
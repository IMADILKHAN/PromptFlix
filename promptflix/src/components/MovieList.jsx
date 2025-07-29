import MovieCard from "./MovieCard";

export default function MovieList({title,movies}){
    console.log("from movieList");
    console.log(movies);
    if(!movies || movies.length==0){
        return <div>Loading.....</div>
    }
    console.log("from movieList");
    return (
        <div className="px-6">
            <h1 className="text-3xl py-2">{title}</h1>
            <div className="flex bg-black overflow-x-scroll no-scrollbar">
                <div className="flex">
                {movies.map(movie=>{
                    return <MovieCard  key={movie.id} image_url={movie.backdrop_path}  />
                })}
                </div>
            </div>
        </div>
    )
}
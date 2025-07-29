import { useSelector } from "react-redux"
import MovieList from "./MovieList"

export default function SecondaryMovieContainer(){
    const movies = useSelector((store)=>store.movie) 
    if(!movies || movies.length==0)return <div> Loading... </div>
    return (
        <div className="bg-black text-white" >
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}  />
            <MovieList title={"Trending"} movies={movies.nowPlayingMovies}  />
            <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}  />

        </div>
    )
}
import { useSelector } from "react-redux"
import MovieList from "./MovieList";

export default function PromptMovieSuggestion(){
    const movies = useSelector(store=>store.prompt.movieRecommendations); 
    console.log(movies);
    return(
        <div className="bg-gradient-to-b from-gray-900 to-black text-white p-6 md:p-10 m-4 md:m-8 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">
          🎬 Based on Your Prompt
        </h2>
        <MovieList title={"Recommended for You"} movies={movies} />
      </div>
    )
}
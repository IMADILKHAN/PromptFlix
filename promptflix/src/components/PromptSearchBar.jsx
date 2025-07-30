import { useRef } from "react"
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/promptSlice";

export default function PromptSearchBar(){ 
    const searchText = useRef(null);
    const dispatch = useDispatch();
    async function fetchMovies(movieName){
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1',API_OPTIONS)

        const json = await data.json();
        return json.results[0];


    }

    async function handleGptSearchClick(){
        const gptResults = await openai.responses.create({
            model: 'gpt-4o',
            instructions: 'You are a cinema expert. Given an input, return a array of 6 or more recommended MOVIES. Example: ["Movie1", "Movie2", "Movie3", ...]. Do NOT include any explanation. DO NOT INCLUDE ANYTHING ELSE JUST AN ARRAY [MOVIE1,MOVIE2,MOVIE3..]',
            input: searchText.current.value,
          });
          const movieRecomendations = gptResults.output_text;
          const movieArray = JSON.parse(movieRecomendations);
          const promiseArray = movieArray.map(movie=>fetchMovies(movie))
          const tmdbResults = await Promise.all(promiseArray)
          dispatch(addGptMovies(tmdbResults));
          console.log(tmdbResults);
    }
    return (
        <div className="pt-[5%] flex justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-11/12 md:w-2/3 lg:w-1/2 bg-black/60 backdrop-blur-md rounded-xl shadow-lg grid grid-cols-12 gap-2 p-4 border border-gray-700"
        >
          <input
            ref={searchText}
            type="text"
            placeholder="🎬 What would you like to watch today?"
            className="col-span-9 p-3 md:p-4 rounded-lg text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
          />
          <button
            onClick={handleGptSearchClick}
            className="col-span-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg px-4 md:px-6 py-2 md:py-3 transition-all duration-300"
          >
            🔍 Search
          </button>
        </form>
      </div>
    )
}
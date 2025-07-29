import { useEffect } from "react";
import { API_OPTIONS, MOVIE_FETCH_URL } from "../utils/constants";
import { Header } from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainTrailerContainer from "./MainTrailerContainer";
import SecondaryMovieContainer from "./SecondaryMovieContainer";
import PromptPage from "./PromptPage";

export function Browse(){
   useNowPlayingMovies();
   const searchView = useSelector((store)=>store.prompt.showSearch) 
    return <>
        <Header/>
        {
            searchView? <PromptPage/> : <><MainTrailerContainer/> <SecondaryMovieContainer/></>
        }
        
    </>
}
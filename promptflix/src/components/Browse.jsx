import { useEffect } from "react";
import { API_OPTIONS, MOVIE_FETCH_URL } from "../utils/constants";
import { Header } from "./Header";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainTrailerContainer from "./MainTrailerContainer";
import SecondaryMovieContainer from "./SecondaryMovieContainer";

export function Browse(){
   
   useNowPlayingMovies(); 
    return <>
        <Header/>
        <MainTrailerContainer/> 
        <SecondaryMovieContainer/>
    </>
}
import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIE_FETCH_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

    const getNowPlayingMovies = async function(){
        const data  =  await fetch(MOVIE_FETCH_URL,API_OPTIONS)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
        getNowPlayingMovies();
    },[])
}



export default useNowPlayingMovies;
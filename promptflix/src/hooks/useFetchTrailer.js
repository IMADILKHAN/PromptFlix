import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

export default function useFetchTrailer(id,key){
    const dispatch = useDispatch();

    async function getMovieTrailer(){
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US',API_OPTIONS); 
        const json = await data.json(); 
        let trailer =  json.results.find(video=> video.type=="Trailer");
        trailer = trailer ? trailer : json.results[0]; 
        dispatch(addTrailerVideo(trailer))
        console.log(trailer);
    }
    useEffect(()=>{
        getMovieTrailer()
    },[])
}
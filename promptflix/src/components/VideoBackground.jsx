import {  useSelector } from "react-redux";
import useFetchTrailer from "../hooks/useFetchTrailer";

export function VideoBackground({id,key}){
    useFetchTrailer(id,key);
    const trailerVideo = useSelector((store)=>store.movie?.trailerVideo);


    return (
        <div className="w-screen" >
            <iframe 
                className="w-screen aspect-video"
                    src={"https://www.youtube.com/embed/"+ "2AKsAxrhqgM"+"?&autoplay=1&mute=1"}
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

            ></iframe>
        </div>
    )
}
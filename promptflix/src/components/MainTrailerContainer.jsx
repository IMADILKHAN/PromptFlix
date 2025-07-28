import { useSelector } from "react-redux"
import { VideoTitle } from "./VideoTitle"
import { VideoBackground } from "./VideoBackground"
import { useEffect } from "react";

export default function MainTrailerContainer(){
    const movies = useSelector((store)=>store.movie?.nowPlayingMovies)
    if (!movies || movies.length === 0) {
        return <div className="text-white text-center p-4">Loading trailer...</div>;
    }
    // if(!movies || movies.length==0) return 
    const mainMovie = movies[0]
    const {original_title,overview,id,key} = mainMovie
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground  id={id} key={key}/>
        </div>
    )
}
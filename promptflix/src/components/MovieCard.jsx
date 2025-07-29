import { IMAGE_CARD_URL } from "../utils/constants";

export default function MovieCard({image_url}){
    console.log("from movie card");
    return (
        <div className="min-w-[300px] pr-4" >
            <img     
            className="h-[180px] w-full object-cover rounded-lg shadow-md"
            alt="Movie Card" 
             src={IMAGE_CARD_URL+image_url} />
        </div>
    )
}
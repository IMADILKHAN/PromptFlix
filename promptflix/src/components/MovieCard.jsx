import { IMAGE_CARD_URL } from "../utils/constants";

export default function MovieCard({image_url}){
    console.log("from movie card");
    return (
        <div className="min-w-[300px] max-w-[300px] pr-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          className="h-[180px] w-full object-cover rounded-xl shadow-lg"
          alt="Movie Card"
          src={IMAGE_CARD_URL + image_url}
        />
      </div>
    )
}
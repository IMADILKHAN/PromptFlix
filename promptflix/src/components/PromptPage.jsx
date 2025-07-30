import { Header } from "./Header";
import PromptMovieSuggestion from "./PromptMovieSuggestion";
import PromptSearchBar from "./PromptSearchBar";
import bgImg from "../assets/backgroundImage.png"

export default function PromptPage(){
    return (
        <>
        <div className="absolute  -z-10" >
                <img src={bgImg} alt="" />
             </div>
        <PromptSearchBar/> 
        <PromptMovieSuggestion/>
        </>
    )
}
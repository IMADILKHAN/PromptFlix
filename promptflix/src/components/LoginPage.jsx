import { Header } from "./Header";
import bgImg from "../assets/backgroundImage.png"
import { useState } from "react";

export function LoginPage(){
    const [status,setStatus] = useState(true);
    function toggleSignin(){
        setStatus(!status)
        console.log(status)
    }
    return <>
        <div className="absolute inset-0 w-full h-full object-cover z-0" >
            <div className="z-10 relative" >
                <Header/>
            </div>
            <img src={bgImg} alt="" />
        </div>
        <form action="" className=" w-3/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 p-12 rounded-lg shadow-lg z-10 h-100 flex flex-col gap-4">
            <h2 className="text-white pt-0 mt-0" >{status? "Sign In" : "Sign Up"}</h2>
            { !status && (
                <input type="text"  placeholder="Full Name" className="p-2 my-2 block w-full rounded bg-white text-black" />                
                )
            }
            <input type="text"  placeholder="Email Adress" className="p-2 my-2 block w-full rounded bg-white text-black" />
            <input type="password" placeholder="Password" className="p-2 my-2 block w-full rounded bg-white text-black" />
            <button className="p-2 mt-4 w-full bg-red-600 rounded-md hover:bg-red-700 transition duration-200" >{status? "Sign In": "Sign Up"}</button>
            <p className="p-2 text-white cursor-pointer" onClick={toggleSignin} >{status? "New to PromptFlix? Sign Up!" : "Already a User? Sign In!"}</p>
        </form>
    </>
}
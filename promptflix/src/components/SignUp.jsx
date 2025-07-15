import { Header } from "./Header";
import bgImg from "../assets/backgroundImage.png"
export function LoginPage(){
    return <>
        <div className="absolute inset-0 w-full h-full object-cover z-0" >
            <div className="z-10 relative" >
                <Header/>
            </div>
            <img src={bgImg} alt="" />
        </div>
        <form action="" className=" w-3/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-12 rounded-lg shadow-lg z-10 h-80 flex flex-col gap-4">
            <input type="text"  placeholder="Email Adress" className="p-2 my-2 block w-full rounded bg-white text-black" />
            <input type="password" placeholder="Password" className="p-2 my-2 block w-full rounded bg-white text-black" />
            <button className="p-2 my-6 w-full bg-red-600 rounded-md hover:bg-red-700 transition duration-200" >Sign In</button>
        </form>
    </>
}
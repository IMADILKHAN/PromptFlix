import { Header } from "./Header";
import bgImg from "../assets/backgroundImage.png"
import { useState,useRef } from "react";
import { checkValidData } from "../utils/validate";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../utils/firebase";

export function LoginPage(){
    const [status,setStatus] = useState(true); 
    const [errorMsg,setErrorMsg] = useState(null);
    const email = useRef(null);
    const password = useRef(null);

    function toggleSignin(){
        setStatus(!status)
        console.log(status)
    } 
    function HandleButtonClick(){
        // Validate Form Data
        setErrorMsg(checkValidData(email.current.value,password.current.value)) 
        if (errorMsg) return ;
        // SignUp
        if (!status) {
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + "-" + errorMessage) 
                });
        }
        // SignIn
        else{
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + "-" + errorMessage) 
                });
        }
    }
    return <>
        <div className="absolute inset-0 w-full h-full object-cover z-0" >
            <div className="z-10 relative" >
                <Header/>
            </div>
            <img src={bgImg} alt="" />
        </div>
        <form onSubmit={(e)=>e.preventDefault()}  action="" className=" w-3/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 p-12 rounded-lg shadow-lg z-10 h-120 flex flex-col gap-4">
            <h2 className="text-white pt-0 mt-0" >{status? "Sign In" : "Sign Up"}</h2>
            { !status && (
                <input type="text"  placeholder="Full Name" className="p-2 my-2 block w-full rounded bg-white text-black" />                
                )
            }
            <input ref={email}  type="text"  placeholder="Email Adress" className="p-2 my-2 block w-full rounded bg-grey-600 text-black" />
            <input ref={password} type="password" placeholder="Password" className="p-2 my-2 block w-full rounded bg-grey-600 text-black" />
            <p className="text-red-500">{errorMsg}</p>
            <button onClick={HandleButtonClick} className="p-2 mt-4 w-full bg-red-600 rounded-md hover:bg-red-700 transition duration-200" >{status? "Sign In": "Sign Up"}</button>
            <p className="p-2 text-white cursor-pointer" onClick={toggleSignin} >{status? "New to PromptFlix? Sign Up!" : "Already a User? Sign In!"}</p>
        </form>
    </>
}
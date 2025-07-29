import { Link, Navigate, useLocation } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png"; 
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleSearchView } from "../utils/promptSlice";

export function Header() {
  const user = useSelector((store)=>store.user); 
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const location = useLocation(); 

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
          if(location.pathname=="/"){
            navigate("/browse");
          }
        } else {
            dispatch(removeUser()); 
            navigate("/");
        }
      });
      return ()=> unsubscribe();
},[]);
  function signinHandler(){
    if(user){
          signOut(auth).then(() => {
              console.log("signout sucess");
            }).catch((error) => {
              console.log("signout Failed"+error);
            });
          }
      navigate("/")
  }

  function handleGptSearch(){
      dispatch(toggleSearchView());
  }
  return (
    <nav className="w-full h-20 px-6  flex items-center justify-between bg-black ">
      {/* Logo on the left */}
      <div className=" w-250">
        <img src={logo} alt="PromptFlix Logo" className="h-12 w-full" />
      </div>

      {/* Navigation links on the right */}
      <ul className="flex space-x-6 text-white font-medium">
        <li>
          <Link to="/home" className="hover:text-red-500 transition">Home</Link>
        </li>
        <li>
          <Link to="/browse" className="hover:text-red-500 transition">Browse</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-red-500 transition">About</Link>
        </li>
        <li>
          <Link onClick={handleGptSearch} className="hover:text-red-500 transition">{user? "PromptSearch": ""}</Link>
        </li>
        <li>
          <Link onClick={signinHandler}  className="font-bold hover:text-red-500 transition">{user? "Signout": ""}</Link>
        </li>
      </ul>
    </nav>
  );
}

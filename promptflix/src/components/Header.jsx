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
    <nav className="w-full h-20 px-8 flex items-center justify-between bg-gradient-to-r from-black to-zinc-900 shadow-md sticky top-0 z-50">
  {/* Logo on the left */}
  <div className="flex items-center">
  <img
    src={logo}
    alt="PromptFlix Logo"
    className="h-14 w-auto object-contain drop-shadow-lg"
  />
</div>

  {/* Navigation links on the right */}
  <ul className="flex space-x-8 text-white font-semibold text-lg">
    <li>
      <Link to="/home" className="hover:text-red-600 transition-colors duration-200">Home</Link>
    </li>
    <li>
      <Link to="/browse" className="hover:text-red-600 transition-colors duration-200">Browse</Link>
    </li>
    <li>
      <Link to="/about" className="hover:text-red-600 transition-colors duration-200">About</Link>
    </li>
    {user && (
      <li>
        <Link onClick={handleGptSearch} className="hover:text-red-600 transition-colors duration-200">
          PromptSearch
        </Link>
      </li>
    )}
    {user && (
      <li>
        <button
          onClick={signinHandler}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-md transition duration-200"
        >
          Sign Out
        </button>
      </li>
    )}
  </ul>
</nav>

  );
}

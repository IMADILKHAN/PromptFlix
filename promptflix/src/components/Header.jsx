import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // adjust path as needed

export function Header() {
  return (
    <nav className="w-full h-20 px-6 py-4 flex items-center justify-between bg-black shadow-md">
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
          <Link to="/contact" className="hover:text-red-500 transition">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

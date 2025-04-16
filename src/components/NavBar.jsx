import { Github } from "lucide-react";
import logo from "../assets/image.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="px-4 py-2 overflow-hidden">
      <nav className=" flex items-center justify-between px-4 py-2">
        {/* logo  */}
        <Link to={"/"}>
          <img
            className="text-2xl font-bold text-lime-400"
            src={logo}
            
            class="w-48 md:w-[250px] "
          />
        </Link>

        <a target="_blank" href="https://github.com/4f24l">
          <button className="flex items-center justify-center gap-2 bg-lime-400 text-black cursor-pointer text-xl sm:text-2xl px-3 pb-1.5 py-1 rounded-md hover:bg-lime-300 transition">
            <Github size={20} /> Github
          </button>
        </a>
      </nav>
    </div>
  );
};

export default Nav;

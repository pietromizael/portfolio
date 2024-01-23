import React from "react";
import { Link } from "react-router-dom";

const FixedNavbar = () => {

  return (
    <div className="flex justify-between gap-48 px-48 pt-8 mb-32 text-slate-300 animate-followDownContainer opacity-0 max-md:px-0 max-md:py-0">
      <div className="navbar shadow-2xl px-20 shadow-slate-950 w-full h-16 text-2xl rounded-xl text-white bg-gradient-to-b from-slate-800 to-transparent hover:backdrop-brightness-200 transition-all duration-300 max-md:bg-slate-800 max-md:rounded-none max-md:hover:backdrop-brightness-100 max-md:shadow-none">
        <ul className="flex w-full h-full justify-between items-center">
          <li>
            <a
              href="https://github.com/pietromizael"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FixedNavbar;

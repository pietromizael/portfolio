import React from "react";

const FixedNavbar = () => {
  return (
    <div
      className="flex justify-between gap-48 px-44 pt-8 mb-36 text-slate-300 animate-followDownContainer opacity-0"
    >
      <div className="navbar w-full h-16 text-xl rounded-lg px-10 text-white bg-gradient-to-b from-slate-800 to-transparent">
        <ul className="flex w-full h-full justify-between items-center ">
          <li>
            <a href="#">Contribuições</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FixedNavbar;

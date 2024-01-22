import { useEffect, useRef } from "react";
import Typed from "typed.js";
import TypeIt from "typeit-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StartPort = () => {
  const myRef = useRef(null);

  useEffect(() => {
    const animateButton = setTimeout(() => {
      myRef.current.classList.add("animate-followUp");
      myRef.current.classList.remove("pointer-events-none");
    }, 9000);

    return () => clearTimeout(animateButton);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="shadow-2xl mb-10 shadow-slate-950 min-h-16 text-4xl rounded-lg px-10 py-5 text-white bg-gradient-to-b from-slate-800 to-transparent hover:backdrop-brightness-200 transition-all duration-300"
      >
        <TypeIt
          as="p"
          options={{
            cursor: false,
            speed: 100,
          }}
        >
          <span className="text-violet-800">let </span>
          <span className="text-green-500">acesso = </span>
          <span className="text-violet-800">true</span>
        </TypeIt>
        <TypeIt
          as="p"
          options={{
            cursor: false,
            startDelay: 3000,
            speed: 100,
          }}
        >
          <span className="text-violet-800">console</span>.
          <span className="text-green-500">log</span>(
          <span className="text-orange-200">"Carregando..."</span>)
        </TypeIt>
        <TypeIt
          as="p"
          options={{
            cursor: false,
            startDelay: 7000,
            speed: 100,
          }}
        >
          <span className="text-violet-800">if</span>(
          <span className="text-green-500">acesso</span>){" "}
        </TypeIt>
      </motion.div>
      <Link
        to="/home"
        ref={myRef}
        className="button-sucess px-14 py-5 text-xl bg-violet-800 text-white rounded-md opacity-0 cursor-pointer pointer-events-none hover:bg-violet-500 duration-300"
      >
        Entrar
      </Link>
    </>
  );
};

export default StartPort;

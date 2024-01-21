import { useEffect } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const StartPort = () => {
  
    useEffect(() => {
      const typedLoading = new Typed(".typed_loading", {
        stringsElement: ".loading",
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 800,
        showCursor: false,
        onComplete: () => {
          setTimeout(() => {
            document
              .querySelector(".button-sucess")
              .classList.add("animate-followUp");
            document.querySelector(".button-sucess").classList.remove("hidden");
            document
              .querySelector(".button-sucess")
              .classList.remove("pointer-events-none");
          }, 1000);
        },
      });
  
      return () => {
        typedLoading.destroy();
      };
    }, []);
  
    
    return (
        <>
        <div className="loading">
          <p>
            <span className="text-violet-800">let </span>
            <span className="text-green-500">acesso </span>={" "}
            <span className="text-violet-800">true</span>
          </p>
          <p>
            <span className="text-violet-800">console</span>.
            <span className="text-green-500">log</span>(
            <span className="text-orange-200">"Carregando..."</span>)
          </p>
          <p>
            <span className="text-violet-800">if</span>(
            <span className="text-green-500">acesso</span>){" "}
            <span className="text-violet-800"></span>
          </p>
        </div>
        <span className="typed_loading text-white text-6xl min-w-96 px-20 py-8 min-h-60 rounded-xl bg-gradient-to-b from-slate-800 to-transparent text-center opacity-0 animate-followDownContainer" />
        <Link to={"/home"} className="button-sucess px-14 py-5 text-xl bg-violet-800 text-white rounded-md opacity-0 pointer-events-none hover:bg-violet-500 duration-300">
          Entrar
        </Link>
        </>
    );
}

export default StartPort
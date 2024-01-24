import { useEffect, useRef } from "react";
import TypeIt from "typeit-react";
import { useNavigate } from "react-router-dom";

const StartPort = () => {
  const myRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {

    const animateButton = setTimeout(() => {
      myRef.current.classList.add("animate-followUp");
      myRef.current.classList.remove("pointer-events-none");
    }, 3000);

    return () => clearTimeout(animateButton);
  }, []);

  const handleButton = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <>
      <div className="flex flex-col gap-4 shadow-2xl mt-72 mx-auto shadow-slate-950 min-h-16 text-4xl rounded-lg px-10 py-10 text-white bg-gradient-to-b from-slate-800 to-transparent hover:backdrop-brightness-200 transition-all duration-300 max-md:bg-none max-md:shadow-none max-md:hover:backdrop-brightness-100">
        <TypeIt
          as="p"
          options={{
            cursor: false,
            speed: 20,
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
            startDelay: 1000,
            speed: 20,
          }}
        >
          <span className="text-violet-800">console</span>.
          <span className="text-green-500">log</span>
          <span className="text-orange-200">("Carregando...)"</span>
        </TypeIt>
        <TypeIt
          as="p"
          options={{
            cursor: false,
            startDelay: 2000,
            speed: 20,
          }}
        >
          <span className="text-violet-800">if</span>(
          <span className="text-green-500">acesso</span>){" "}
        </TypeIt>
      </div>
      <button
        onClick={handleButton}
        ref={myRef}
        className="mt-10 mx-auto px-14 py-5 text-xl bg-slate-800 text-white rounded-md opacity-0 cursor-pointer pointer-events-none hover:bg-slate-600 transition-all duration-300"
      >
        Entrar
      </button>
    </>
  );
};

export default StartPort;

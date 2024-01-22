import TypeIt from "typeit-react";
import { useEffect, useState, useRef } from "react";

import Profile from "../images/profile-removebg-preview.png";

const About = () => {
  const imageAnimate = useRef(null);

  useEffect(() => {
    const animate = setTimeout(() => {
      imageAnimate.current.classList.add("animate-followDown");
    }, 9000);

    return () => clearTimeout(animate);
  }, []);

  return (
    <div className="flex justify-between px-48 pt-8">
      <div className="container px-20 py-8 flex justify-center max-w-container my-0 mx-auto rounded-xl bg-gradient-to-half from-slate-800 to-transparent mb-3items-center opacity-0 animate-followDownContainer hover:backdrop-brightness-200 transition-all duration-300">
        <div className="header flex gap-6 w-full pb-2 border-b-2 border-b-slate-400">
          <div className="about text-justify w-1/3 mt-3 text-slate-500">
            <TypeIt
              as={"h2"}
              options={{
                cursor: false,
                speed: 200,
              }}
              className="flex justify-center text-3xl text-white font-bold mb-4"
            >
              Sobre mim
            </TypeIt>
            <TypeIt
              className="text-slate-300 text-2xl"
              options={{
                cursor: false,
                startDelay: 3000,
                speed: 0.1,
              }}
            >
              Olá, sou Pietro Mizael, um desenvolvedor Full-Stack dedicado e
              apaixonado, residindo atualmente em Cantagalo, Rio de Janeiro.
              Estou em constante aprimoramento dos meus conhecimentos, engajado
              em cursos, projetos e na formação acadêmica. No momento, estou
              cursando Tecnologia em Sistemas pela Universidade Federal
              Fluminense (UFF).
            </TypeIt>
          </div>
          <div className="flex justify-center relative w-1/3">
            <img
              src={Profile}
              alt="profile"
              ref={imageAnimate}
              className="opacity-0 w-72 h-72 rounded-full absolute bg-transparent border-none self-center shadow-2xl bottom-60"
            />
          </div>
          <div className="developer text-justify w-1/3 text-slate-300">
            <TypeIt
              as={"h2"}
              className="text-center bg-slate-500 px-1 py-2 text-2xl rounded-lg text-white mb-4"
              options={{
                cursor: false,
                speed: 100,
              }}
            >
              Desenvolvedor Full-Stack
            </TypeIt>
            <TypeIt
              className="text-2xl"
              options={{
                cursor: false,
                startDelay: 3000,
                speed: 0.1,
              }}
            >
              Possuo uma base sólida tanto em desenvolvimento front-end quanto
              back-end, com especial afinidade pelas tecnologias React.js,
              Node.js, TailwindCSS, Python e MongoDB. Ao longo de minha
              trajetória profissional, desenvolvi também habilidades avançadas
              em escrita de código limpo, trabalho em equipe e na implementação
              de microcomponentes.
            </TypeIt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

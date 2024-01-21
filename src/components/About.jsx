import TypeIt from "typeit-react";

import { useEffect } from "react";

import Profile from "../images/profile.png";

const About = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".image").classList.add("animate-followDown");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main flex justify-center items-center opacity-0 animate-followDownContainer">
      <div className="container  min-w-1/2 min-h-60 px-20 py-8 rounded-xl bg-gradient-to-b from-slate-800 to-transparent mb-10">
        <div className="header flex gap-6 w-full pb-2 border-b-2 border-b-slate-400">
          <div className="about text-justify w-1/3 mt-3 text-slate-500">
            <TypeIt
              as={"h2"}
              className="flex justify-center text-3xl text-white font-bold mb-4"
              options={{
                speed: 100,
                afterComplete: (instance) => {
                  instance.destroy();
                },
              }}
            >
              Sobre mim
            </TypeIt>
            <TypeIt
              className="text-slate-300 text-xl"
              options={{
                cursor: false,
                startDelay: 3000,
                waitUntilVisible: false,
                speed: 20,
                afterComplete: (instance) => {
                  instance.destroy();
                },
              }}
            >
              Olá, meu nome é Pietro Mizael. Sou um desenvolvedor
              Full-Stack apaixonado e empenhado, atualmente residindo em
              Cantagalo, Rio de Janeiro. Atualmente, estou aprofundando meus
              conhecimentos através de projetos e no curso Tecnologia em
              Sistemas da pela Universidade Federal Fluminense (UFF).
            </TypeIt>
          </div>
          <div className="relative w-1/3">
            <img
              src={Profile}
              alt="profile"
              className="image rounded-full opacity-0 w-60 h-60 absolute left-20 shadow-2xl shadow-slate-600"
            />
          </div>
          <div className="developer text-justify w-1/3 text-slate-300">
            <TypeIt
              as={"h2"}
              className="text-center bg-slate-500 px-1 py-2 text-2xl rounded-lg text-white mb-4"
              options={{
                speed: 100,
                afterComplete: (instance) => {
                  instance.destroy();
                },
              }}
            >
              Desenvolvedor Full-Stack
            </TypeIt>
            <TypeIt
            className="text-xl"
              options={{
                cursor: false,
                startDelay: 3000,
                waitUntilVisible: false,
                speed: 20,
                afterComplete: (instance) => {
                  instance.destroy();
                },
              }}
            >
              Possuo conhecimentos sólidos front-end e back-end. Com afinidades
              em React e Node.js. Diante de minha jornada, pude desenvolver
              fortes habilidades através projetos, tentativas, erros e acertos.
            </TypeIt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

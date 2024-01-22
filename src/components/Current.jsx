import React from "react";
import { useState } from "react";

import TypeIt from "typeit-react";
import { useInView } from "react-intersection-observer";

const Current = () => {
  const { ref, inView } = useInView({});

  const [hasBeenView, setHasBeenView] = useState(false);

  if (inView && !hasBeenView) {
    setHasBeenView(true);
  }

  return (
    <div className="text-center px-48 pt-8">
    <div
      ref={ref}
      className={` text-white flex flex-col my-20 mx-auto max-w-container opacity-0 shadow-2xl shadow-slate-950 rounded-xl bg-gradient-to-half from-slate-800 to-transparent ${
        hasBeenView ? "animate-followDownContainer" : "opacity-0"
      } hover:backdrop-brightness-200 transition-all duration-300`}
    >
      <div className="self-center px-10 py-2 rounded-md">
        {hasBeenView && (
          <TypeIt
            as="span"
            className="text-3xl mt-10"
            options={{
              speed: 100,
              cursor: false,
            }}
          >
            Atualmente
          </TypeIt>
        )}
      </div>
      <div className="max-w-container min-h-48 px-20 py-10 text-justify">
        {hasBeenView && (
          <TypeIt
            as="span"
            className="text-slate-300 text-2xl"
            options={{
              cursor: false,
              speed: 0.1,
            }}
          >
            Atualmente, estou imerso em um projeto desafiador e gratificante na
            comunidade Developers, integrando a dinâmica equipe de front-end.
            Neste papel, minha principal responsabilidade é desenvolver
            aplicações web inovadoras e eficientes, que não apenas atendam, mas
            superem as expectativas dos usuários finais. Além do desenvolvimento
            técnico, este projeto na comunidade Developers tem sido uma jornada
            de crescimento pessoal. Aprender a trabalhar eficientemente em
            equipe, gerenciar prazos e comunicar ideias de forma clara são
            habilidades que estou desenvolvendo e que considero tão valiosas
            quanto os aspectos técnicos do meu trabalho.
          </TypeIt>
        )}
      </div>
      </div>
    </div>
  );
};

export default Current;

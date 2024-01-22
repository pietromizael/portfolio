import { Autoplay, EffectCoverflow } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./ProjectsCarousel.css";

import Todo from "../images/projects/todo.png";
import BlogAxios from "../images/projects/blog_axios.png";
import Countdown from "../images/projects/countdown.png";
import DevNotes from "../images/projects/dev_notes.png";
import ImcCalc from "../images/projects/imc_calc.png";
import MultiStepForm from "../images/projects/multistep_form.png";
import PassGen from "../images/projects/pass_gen.png";
import QuizDev from "../images/projects/quiz_dev.png";

const Carousel = () => {
  const ProjectImages = [
    {
      image: Todo,
      title: "Todo List avançada",
      url: "https://github.com/pietromizael/todo-list-advanced",
    },
    {
      image: BlogAxios,
      title: "Blog feito com Axios",
      url: "https://github.com/pietromizael/blog_axios",
    },
    {
      image: Countdown,
      title: "Contador de tempo para datas",
      url: "https://github.com/pietromizael/countdown",
    },
    {
      image: DevNotes,
      title: "Dev Notes com LocalStorage e export/csv",
      url: "https://github.com/pietromizael/dev-notes",
    },
    {
      image: ImcCalc,
      title: "Calculadora de IMC",
      url: "https://github.com/pietromizael/calculadora_imc_react",
    },
    {
      image: MultiStepForm,
      title: "Formulário de múltiplas etapas",
      url: "https://github.com/pietromizael/multistep_form",
    },
    {
      image: PassGen,
      title: "Gerador de senhas",
      url: "https://github.com/pietromizael/pass-generator",
    },
    {
      image: QuizDev,
      title: "Quiz de programação",
      url: "https://github.com/pietromizael/quiz-react",
    },
  ];

  const ProjectSlide = ({ project }) => (
    <div className="group relative opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500">
      <img
        src={project.image}
        alt="Projects"
        className={`rounded-lg max-w-custom max-h-custom min-h-custom min-w-custom `}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2 project-url min-w-custom projects-url">
        <a href={project.url} target="_blank" rel="noopener noreferrer">{project.title}</a>
      </div>
    </div>
  );

  return (
    <div className="all flex flex-col w-1/2 min-h-10 justify-center items-center py-10 rounded-xl">
      <div className="mb-10">
        <h2 className="text-3xl text-white pb-2 border-b-2 border-slate-400">Projetos</h2>
      </div>
      <div className="carousel w-full">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          centeredSlides={true}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          coverflowEffect={{
            slideShadows: false,
            rotate: -40,
            stretch: -100,
            depth: 100,
            modifier: 5,
          }}
        >
          {ProjectImages.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectSlide project={project}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;

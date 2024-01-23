import ReactLogo from "../images/logos/react-2.svg";
import TailwindLogo from "../images/logos/tailwind.svg";
import JavascriptLogo from "../images/logos/javascript-icon.svg";
import MongoDbLogo from "../images/logos/mongodb-icon.svg";
import MysqlLogo from "../images/logos/mysql-icon.svg";
import NodeJsLogo from "../images/logos/nodejs-icon.svg";
import PythonLogo from "../images/logos/python-icon.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

const Stacks = () => {
  const StacksImages = [
    {
      image: ReactLogo,
      title: "React",
    },
    {
      image: TailwindLogo,
      title: "Tailwind",
    },
    {
      image: JavascriptLogo,
      title: "Javascript",
    },
    {
      image: MongoDbLogo,
      title: "MongoDB",
    },
    {
      image: MysqlLogo,
      title: "MySQL",
    },
    {
      image: NodeJsLogo,
      title: "Node.js",
    },
    {
      image: PythonLogo,
      title: "Python",
    },
  ];

  const StacksSlide = ({ stack }) => (
    <img
      className="rounded-lg w-custom h-custom opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500 my-0 mx-auto max-xl:w-full"
      src={stack.image}
      alt={stack.title}
    />
  );

  return (
    <div className="flex flex-col w-full min-h-10 justify-center items-center rounded-xl hover:backdrop-brightness-200 transition-all duration-300 px-48 py-8 max-md:px-0">
      <div className="mb-10">
        <h2 className="text-3xl text-white mb-3 text-center">Stacks</h2>
      </div>
      <div className="stacks-carousel w-full pb-10">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          slidesPerView={3}
          speed={2000}
          centeredSlides={true}
          effect="coverflow"
          coverflowEffect={{
            slideShadows: false,
            rotate: -40,
            stretch: -100,
            depth: 100,
            modifier: 5,
          }}
          breakpoints={
            {
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
                effect: "slide",
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
                effect: "slide",
              },
              1366: {
                slidesPerView: 3,
                spaceBetween: -100,
                effect: "coverflow",
            }
          }
          }
        >
          {StacksImages.map((stack, index) => (
            <SwiperSlide key={index}>
              <StacksSlide stack={stack}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Stacks;

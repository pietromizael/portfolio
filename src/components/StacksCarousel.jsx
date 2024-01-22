import ReactLogo from "../images/logos/react-2.svg";
import TailwindLogo from "../images/logos/tailwind.svg";
import JavascriptLogo from "../images/logos/javascript-icon.svg";
import MongoDbLogo from "../images/logos/mongodb-icon.svg";
import MysqlLogo from "../images/logos/mysql-icon.svg";
import NodeJsLogo from "../images/logos/nodejs-ar21.svg";
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
      className="rounded-lg max-w-custom max-h-custom min-w-custom min-h-custom opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
      src={stack.image}
      alt={stack.title}
    />
  );

  return (
    <div className="stacks-carousel flex flex-col w-1/2 min-h-10 justify-center items-center py-10 rounded-xl">
      <div className="mb-10">
        <h2 className="text-3xl text-white">Stacks</h2>
      </div>
      <div className="stacks-carousel w-full">
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
        >
          {StacksImages.map((stack, index) => (
            <SwiperSlide key={index}>
              <StacksSlide stack={stack} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Stacks;

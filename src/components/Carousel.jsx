import { Autoplay, EffectCoverflow } from "swiper/modules";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Todo from "../images/todo.png";

const Carousel = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document
        .querySelector(".all")
        .classList.add("animate-followDownContainer");
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="all flex flex-col w-1/2 min-h-10 justify-center items-center py-10 rounded-xl opacity-0">
      <div className="mb-10">
        <h2 className="text-3xl text-white">Projetos</h2>
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
            rotate: 50,
            stretch: 0,
            depth: 400,
          }}
        >
          <SwiperSlide>
            {({ isActive }) => (
              <img
                src={Todo}
                alt=""
                className={`rounded-lg max-w-custom max-h-custom ${
                  isActive ? "opacity-100" : "opacity-10"
                } transition-opacity duration-500 ease-in-out`}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <img
                src={Todo}
                alt=""
                className={`rounded-lg w-96 ${
                  isActive ? "opacity-100" : "opacity-10"
                } transition-opacity duration-500 ease-in-out`}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <img
                src={Todo}
                alt=""
                className={`rounded-lg w-96 ${
                  isActive ? "opacity-100" : "opacity-10"
                } transition-opacity duration-500 ease-in-out`}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <img
                src={Todo}
                alt=""
                className={`rounded-lg w-96 ${
                  isActive ? "opacity-100" : "opacity-10"
                } transition-opacity duration-500 ease-in-out`}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <img
                src={Todo}
                alt=""
                className={`rounded-lg w-96 ${
                  isActive ? "opacity-100" : "opacity-10"
                } transition-opacity duration-500 ease-in-out`}
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <img
                src={Todo}
                alt=""
                className={`rounded-lg w-96 ${
                  isActive ? "opacity-100" : "opacity-10"
                } transition-opacity duration-500 ease-in-out`}
              />
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;

import { useEffect } from "react";

import ReactLogo from "../images/react-2.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCards,
  EffectCoverflow,
  EffectCube,
  EffectFade,
  EffectFlip,
} from "swiper/modules";

const Stacks = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document
        .querySelector(".stacks-carousel")
        .classList.add("animate-followDownContainer");
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="stacks-carousel flex flex-col w-1/2 min-h-10 justify-center items-center py-10 rounded-xl opacity-0">
      <div className="mb-10">
        <h2 className="text-3xl text-white">Stacks</h2>
      </div>
      <div className="stacks-carousel w-full">
        <Swiper
          modules={[EffectCoverflow, Autoplay, ]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          rtl={true}
          slidesPerView={3}
          speed={2000}
          centeredSlides={true}
          effect="coverflow"
          coverflowEffect={
            {
              rotate: 50,
              stretch: 0,
              depth: 400,
            }
          }

        >
          <SwiperSlide className="text-white">
            {({ isActive }) => (
              <img
                className={`rounded-lg max-w-custom max-h-custom ${
                  isActive ? "opacity-100" : "opacity-10"
                } transition-opacity duration-500 ease-in-out`}
                src={ReactLogo}
                alt="React"
              />
            )}
          </SwiperSlide>
          <SwiperSlide className="text-white">
            {({ isActive }) => (
              <img
                className={`rounded-lg max-w-custom max-h-custom ${
                  isActive ? "opacity-100" : "opacity-10"
                } transition-opacity duration-500 ease-in-out`}
                src={ReactLogo}
                alt="React"
              />
            )}
          </SwiperSlide>
          <SwiperSlide className="text-white">
            {({ isActive }) => (
              <img
                className={`rounded-lg max-w-custom max-h-custom ${
                  isActive ? "opacity-100" : "opacity-10"
                } transition-opacity duration-500 ease-in-out`}
                src={ReactLogo}
                alt="React"
              />
            )}
          </SwiperSlide>
          <SwiperSlide className="text-white">
            {({ isActive }) => (
              <img
                className={`rounded-lg max-w-custom max-h-custom ${
                  isActive ? "opacity-100" : "opacity-10"
                } transition-opacity duration-500 ease-in-out`}
                src={ReactLogo}
                alt="React"
              />
            )}
          </SwiperSlide>
          <SwiperSlide className="text-white">
            {({ isActive }) => (
              <img
                className={`rounded-lg max-w-custom max-h-custom ${
                  isActive ? "opacity-100" : "opacity-10"
                } transition-opacity duration-500 ease-in-out`}
                src={ReactLogo}
                alt="React"
              />
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Stacks;

import ProjectsCarousel from "./ProjectsCarousel.jsx";
import StacksCarousel from "./StacksCarousel.jsx";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const DivCarousels = () => {
  const { ref, inView } = useInView({});

  const [hasBeenView, setHasBeenView] = useState(false);

  useEffect(() => {
    const view = () =>
      setTimeout(() => {
        if (inView && !hasBeenView) {
          setHasBeenView(true);
        }
  });

    view();

    return () => {
      clearTimeout(view);
    };
  }, [inView, hasBeenView]);

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-7 max-w-container justify-center items-center my-20 mx-auto opacity-0 ${
        hasBeenView ? "animate-followDownContainer" : "opacity-0"
      }`}
    >
      <ProjectsCarousel />
      <StacksCarousel />
    </div>
  );
};

export default DivCarousels;

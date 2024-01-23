import React from "react";
import { useEffect, useRef, useState } from "react";

import Background from "../public/background.mp4";

const BackgroundAnimated = () => {
  const videoRef = useRef(null);

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const video = videoRef.current;
    let timeoutId;

    const handleVideoEnd = () => {
      setOpacity(0);
      
      timeoutId = setTimeout(() => {
        video.play();
        setOpacity(1);
      }, 2000);
    };


    if (video) {
      video.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleVideoEnd);
      }
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1] bg-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: opacity,
          transition: "opacity 1s",
        }}
      >
        <source src={Background} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
    </div>
  );
};

export default BackgroundAnimated;

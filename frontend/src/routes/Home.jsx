import About from "../components/About";
import FixedNavbar from "../components/FixedNavbar";
import Current from "../components/Current";
import DivCarousels from "../components/DivCarousels";

import "./Home.css";

const Home = () => {
  return (
    <>
      <FixedNavbar />
      <About />
      <DivCarousels />
      <Current />
    </>
  );
};

export default Home;

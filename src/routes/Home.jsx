import About from "../components/About";
import FixedNavbar from "../components/FixedNavbar";
import Carousel from "../components/Carousel";
import StacksCarousel from "../components/StacksCarousel";

const Home = () => {
  return (
    <>
      <FixedNavbar />
      <About />
      <div className="flex">
        <Carousel />
        <StacksCarousel />
      </div>
    </>
  );
};

export default Home;

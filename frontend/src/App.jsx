import { Outlet } from "react-router-dom";
import BackgroundAnimated from "./components/BackgroundAnimated";

function App() {
  return (
    <>
      <BackgroundAnimated/>
      <Outlet />
    </>
  );
}

export default App;

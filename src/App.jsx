import { Outlet } from "react-router-dom";
import {PageTransition} from "./components/PageTransition";
import BackgroundAnimated from "./components/BackgroundAnimated";

function App() {
  return (
    <PageTransition>
      <BackgroundAnimated />
      <Outlet />
    </PageTransition>
  );
}

export default App;

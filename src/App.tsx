import type { Component } from "solid-js";
import LandingPage from "./components/LandingPage";
import Starfield from "./components/Starfield";

const App: Component = () => {
  return (
    <div>
      <div class="relative dark:text-white min-h-screen flex items-center justify-center z-10 bg-slate-950">
        <LandingPage></LandingPage>
      </div>
      {/* <Starfield /> */}
    </div>
  );
};

export default App;

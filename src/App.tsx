import type { Component } from "solid-js";
import LandingPage from "./components/LandingPage";
import Bubbles from "./components/Bubbles";
import WarpSpeed from "./components/WarpSpeed";

const App: Component = () => {
  return (
    <div class="dark:bg-gray-900 dark:text-white min-h-screen flex items-center justify-center">
      <LandingPage></LandingPage>
    </div>
  );
};

export default App;

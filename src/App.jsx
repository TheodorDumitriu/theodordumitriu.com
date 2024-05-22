import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import TeckSkills from "./components/TechSkills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <TeckSkills />
      </main>
    </>
  );
}

export default App;

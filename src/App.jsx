import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import TeckSkills from "./components/TechSkills";
import AltSkillLister from "./components/AltSkillLister";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <TeckSkills />
        <section className="alt-skills container d-flex align-items-center justify-content-space-between">
          <AltSkillLister
            title="Toolebelt"
            skills={[
              "Full Stack Web development",
              "Project Management",
              "Team management & recruitment",
              "Code reviews, testing & validation",
              "Multi project tracking",
              "Autodidact & autonomous",
            ]}
          />
          <AltSkillLister
            title="Languages"
            skills={[
              "English - Native Level",
              "French - Native Level",
              "Romanian - Native Level",
              "Spanish - Intermediary",
            ]}
          />
        </section>
      </main>
    </>
  );
}

export default App;

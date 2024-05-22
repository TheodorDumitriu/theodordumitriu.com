import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import TeckSkills from "./components/TechSkills";
import AltSkillLister from "./components/AltSkillLister";
import Experience from "./components/Experience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <TeckSkills />
        <section className="alt-skills container d-flex align-items-start justify-content-space-between">
          <AltSkillLister
            title="Toolbelt"
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
        <section className="experience container">
          <h2 className="exprience__title">Experience</h2>
          <Experience
            xpName="Full Stack Developer | Tech Lead"
            xpDuration="Markentive | September 2020 - present"
            xpItems={[
              "Coordinating teams Developers, Consultants, UX Designers & Content Managers",
              "Team training & Coaching",
              "Monitoring & Quality Check",
              "Web Site & App Development",
              "R&D: innovation & optimization",
            ]}
          />
          <Experience
            xpName="Developer Manager"
            xpDuration="Markentive | September 2019 - September 2020"
            xpItems={[
              "Project & Operations Management",
              "Web App & Web Site Development",
              "Technical Audit",
              "Reporting",
            ]}
          />
          <Experience
            xpName="Web Developer"
            xpDuration="Markentive | June 2018 - September 2019"
            xpItems={[
              "Web Site development Wordpress & Hubspot",
              "Technical Project Management",
              "Headless CMS Gatsby, React, Contentful",
            ]}
          />
          <Experience
            xpName="Public Relations Consultant"
            xpDuration="Licence K | January 2018 - June 2018"
            xpItems={[
              "Writing press releases on tech subjects",
              "Press relations consulting",
            ]}
          />
          <Experience
            xpName="Concierge Assistant"
            xpDuration="Sofitel | August 2013 - September 2017"
            xpItems={[
              "Booking management: restaurants, shows, museums, exhibitions, plane, train",
            ]}
          />
          <Experience
            xpName="Natural Language Processing Engineer"
            xpDuration="CNRS | January 2012 - August 2012"
            xpItems={[
              "Lexical research on landslides in French and English newspapers",
              "Extraction and morpho-syntactic analysis of event data",
              "Google Maps API integration",
            ]}
          />
        </section>
      </main>
    </>
  );
}

export default App;

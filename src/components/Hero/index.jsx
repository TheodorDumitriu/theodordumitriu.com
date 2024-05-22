import "./style.css";

import MugShot from "../../assets/theodor-dumitriu.jpg";

export default function Hero() {
  return (
    <>
      <section className="hero container d-flex align-items-center justify-content-space-between">
        <div className="hero__caption-container">
          <h1>Me... in a few wise words</h1>
          <p className="hero__caption">
            Passionate about technology and the web, I am constantly exploring
            the frontiers of new innovations. Over the past six years, I have
            thrived as both a Full Stack Developer and a Tech Lead within a
            dynamic digital agency. In this role, I orchestrated cohesive teams
            of developers, UX/UI designers, consultants. Now, I am on the
            lookout for new challenges and opportunities within the
            ever-evolving realm of the tech world.
          </p>
        </div>
        <div className="hero__mugshot-container">
          <img className="hero__mugshot" src={MugShot} alt="Theodor Dumitriu" />
        </div>
      </section>
    </>
  );
}

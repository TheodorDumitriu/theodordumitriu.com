import { useState } from "react";

import "./Header.css";

import useMountTransition from "./useMountTransition";

export default function Header() {
  const [contactDrawer, setContactDrawer] = useState(false);
  const hasTransitionedIn = useMountTransition(contactDrawer, 1000);

  function handleContact() {
    setContactDrawer(!contactDrawer);
  }

  return (
    <header className="header container d-flex align-items-center justify-content-space-between">
      <div className="header__caption-container">
        <span className="header__title">Theodor Dumitriu</span>
        <p>Full-Stack Developer </p>
      </div>
      <div className="header__contact-container d-flex align-items-center">
        <div className="header__contact-card">
          {(hasTransitionedIn || contactDrawer) && (
            <div
              className={`card ${hasTransitionedIn && "in"} ${
                contactDrawer && "visible"
              }`}
            >
              <a
                href="mailto:theodordumitriu@gmail.com"
                className="header__mail"
              >
                ✉️ theodordumitriu@gmail.com
              </a>
              <a href="tel:+33631972570" className="header__phone">
                🤙 +33 6 31 97 25 70
              </a>
              <a
                href="https://www.linkedin.com/in/theodor-mihai-dumitriu-38a151a5/"
                className="header__linkedin"
              >
                <span className="header__linkedin-container d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    class="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                    className="header__linkedin-picto"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                  linkedin
                </span>
              </a>
            </div>
          )}
        </div>
        <button onClick={handleContact} className="header__contact-clicker">
          Let's talk
        </button>
      </div>
    </header>
  );
}

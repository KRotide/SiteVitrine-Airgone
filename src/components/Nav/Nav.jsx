import React, { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <a href="#top" className="title">
        <h1>Airgone</h1>
      </a>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav__content">
          <ul className="nav__content__anchors">
            <li className="nav__content__anchors__anchor">
              <a href="#top" className="nav__content__anchors__link">
                Accueil
              </a>
            </li>
            <li className="nav__content__anchors__anchor">
              <a href="#slides" className="nav__content__anchors__link">
                Diapo
              </a>
            </li>
            <li className="nav__content__anchors__anchor">
              <a href="#gallery" className="nav__content__anchors__link">
                Galerie
              </a>
            </li>
            <li className="nav__content__anchors__anchor">
              <a href="#story" className="nav__content__anchors__link">
                Histoire
              </a>
            </li>
            <li className="nav__content__anchors__anchor">
              <a href="#contact" className="nav__content__anchors__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

import React, { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./navbar.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
const [activeLink, setActiveLink] = useState("#hero");

  // Scroll effect
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      let current = "#hero";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 60; // adjust offset
        if (window.scrollY >= sectionTop) {
          current = `#${section.id}`;
        }
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="cont">
        <div className="logo">KE</div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a
              href="#hero"
              className={activeLink === "#hero" ? "active" : ""}
              onClick={() => {
                setMenuOpen(false);
                setActiveLink("#hero");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeLink === "#about" ? "active" : ""}
              onClick={() => {
                setMenuOpen(false);
                setActiveLink("#about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#tech"
              className={activeLink === "#tech" ? "active" : ""}
              onClick={() => {
                setMenuOpen(false);
                setActiveLink("#tech");
              }}
            >
              Tech
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeLink === "#projects" ? "active" : ""}
              onClick={() => {
                setMenuOpen(false);
                setActiveLink("#projects");
              }}
            >
              Projects
            </a>
          </li>

          {/* Dropdown */}
          <li className="dropdown" ref={dropdownRef}>
            <a
              href="#contact"
              className={activeLink === "#contact" ? "active" : ""}
            >
              <span
                className="dropdown-toggle"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Contact ▼
              </span>
            </a>
            <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              <li>
                <a
                  href="https://wa.me/+201224588735"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/KarenEhab53"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/karen-ehab-23777623b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="mailto:karenehab53@gmail.com">
                  <MdEmail />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

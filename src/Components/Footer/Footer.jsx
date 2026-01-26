import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-bottom">
        <div className="footer-icons">
          <a
            href="https://github.com/KarenEhab53"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/karen-ehab-23777623b"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:karenehab53@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Karen . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

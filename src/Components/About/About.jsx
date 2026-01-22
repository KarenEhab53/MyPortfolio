import React from "react";
import { motion } from "framer-motion";
import "./about.css";
import { Link } from "react-router-dom";

const About = () => {
  const timeline = [
    "I am Karen Ehab, a passionate Front-End Developer dedicated to creating engaging and user-friendly web experiences.",
    "Proficient in React.js, JavaScript, HTML, CSS, Tailwind, and Bootstrap, I build responsive and interactive interfaces that combine functionality with elegant design.",
    "I am a lifelong learner, constantly exploring the latest technologies, including backend development, AWS, and software fundamentals, to become a well-rounded developer.",
    "I thrive on solving complex challenges, optimizing performance, and collaborating on innovative projects to turn creative ideas into reality.",
    "Beyond coding, I enjoy crafting clean, maintainable code, staying curious, and contributing to projects that make a positive impact.",
  ];

  return (
    <section className="about" id="about">
      <h2>About Me</h2>

      <div className="timeline">
        {timeline.map((line, index) => {
          const isLeft = index % 2 === 0; // alternate left/right
          return (
            <motion.div
              className={`timeline-card ${isLeft ? "left" : "right"}`}
              key={index}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <div className="circle" />
              <p>{line}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Download Resume Button */}
      <a
        href="https://drive.google.com/file/d/1GAoFAAzirKWJ4pEF5U01rQOSlOTwkYyv/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-resume"
      >
        Download Resume
      </a>
    </section>
  );
};

export default About;

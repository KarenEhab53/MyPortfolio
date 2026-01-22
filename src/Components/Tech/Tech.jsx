import React from "react";
import {
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { motion } from "framer-motion";
import "./tech.css"; // import the CSS

const Tech = () => {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const techs = [
    { icon: <BiLogoJavascript />, name: "JavaScript", color: "orange" },
    { icon: <BiLogoBootstrap />, name: "Bootstrap", color: "indigo" },
    { icon: <BiLogoTailwindCss />, name: "Tailwind CSS", color: "sky" },
    { icon: <BiLogoReact />, name: "React.js", color: "blue" },
    { icon: <BiLogoCss3 />, name: "CSS3", color: "blue-dark" },
  ];

  return (
    <div id="tech" className="tech-section">
      <motion.h2
        variants={item}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
      >
        Technologies
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="tech-grid"
      >
        {techs.map((tech, index) => (
          <motion.div key={index} variants={item} className="tech-card">
            {React.cloneElement(tech.icon, {
              className: `tech-icon ${tech.color}`,
            })}
            <span className="tech-name">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;

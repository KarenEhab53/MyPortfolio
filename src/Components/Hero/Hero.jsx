import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import img from "../../assets/photo_2022-08-23_18-34-41-removebg-preview.png";

const Hero = () => {
  // Fade-in animation for paragraph and role
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay },
    }),
  };

  // Floating animation for the image
  const floatImg = {
    animate: {
      y: [0, -20, 0], // up and down
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-left">
          {/* Role text */}
          <motion.p
            className="role"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Front-End Developer
          </motion.p>

          {/* Typing effect for the name */}
          <motion.h1
            className="motion-typing"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "linear", delay: 0.5 }}
          >
            Hello, my name is Karen Ehab
          </motion.h1>

          {/* Paragraph fades in after the name */}
          <motion.p
            className="desc"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1.5} // delay after name
          >
            I don’t just build websites — I enjoy crafting experiences. From
            layouts to interactions, I love every step of turning a design into
            a responsive, living website.
          </motion.p>
          <div className="buttons">
            <button>Contact Us</button>
            <button>Projects</button>
          </div>
        </div>

        <div className="hero-right">
          {/* Floating circular image */}
          <motion.div
            className="hero-img-wrapper"
            variants={floatImg}
            animate="animate"
          >
            <img src={img} alt="profile" className="hero-img" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

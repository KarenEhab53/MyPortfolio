import { motion } from "framer-motion";
import "./about.css";

const About = () => {
  const timeline = [
    "I am Karen Ehab, a passionate Front-End Developer dedicated to creating engaging and user-friendly web experiences.",
    "Proficient in React.js, JavaScript, HTML, CSS, Tailwind, and Bootstrap, I build responsive and interactive interfaces.",
    "I am a lifelong learner, constantly exploring backend development, AWS, and software fundamentals.",
    "I thrive on solving challenges, optimizing performance, and collaborating on innovative projects.",
    "Beyond coding, I enjoy writing clean, maintainable code and creating meaningful experiences.",
  ];

  // SAME animation system as Tech
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="about" id="about">
      <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} >
        About Me
      </motion.h2>

      <motion.div className="timeline" variants={container} initial="hidden" whileInView="visible" viewport={{ once: false,  amount: 0.3, }}>
        {timeline.map((line, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div key={index} variants={item} className={`timeline-card ${isLeft ? "left" : "right"}`} >
              <span className="circle"></span>
              <p>{line}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.a href="https://drive.google.com/file/d/1GAoFAAzirKWJ4pEF5U01rQOSlOTwkYyv/view" target="_blank"
        rel="noopener noreferrer" className="btn-resume" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
        Download Resume
      </motion.a>
    </section>
  );
};

export default About;

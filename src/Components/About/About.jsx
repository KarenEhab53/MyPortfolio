import { motion } from "framer-motion";
import "./about.css";

const About = () => {
  const timeline = [
    "Hi, I’m Karen Ehab! I’m a passionate MERN Stack Developer who loves bringing ideas to life through code.",
    "I enjoy creating seamless, dynamic web applications that users love to interact with.",
    "With skills in React.js, Node.js, Express, MongoDB, JavaScript, HTML, CSS, Tailwind, and Bootstrap, I build responsive and full-stack solutions.",
    "I’m constantly learning, exploring backend architecture, API design, and cloud services like AWS to grow as a developer.",
    "Solving challenging problems, optimizing performance, and collaborating on innovative projects truly excites me.",
    "Coding isn’t just my job—it’s my passion. I enjoy writing clean, maintainable code and creating meaningful experiences for users.",
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

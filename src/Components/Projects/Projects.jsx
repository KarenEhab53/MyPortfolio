import React, { useRef } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.jpg";
import "./projects.css";

const projectData = [
  {
    image: img4,
    title: "Handmade Store",
    description:
      "E-commerce front-end for showcasing handmade products with responsive UI.",
    technologies: ["React", "Context API", "CSS"],
    github: "https://github.com/KarenEhab53/Handmade",
    demo: "https://handmade-laep.vercel.app/",
  },
  {
    image: img6,
    title: "Restaurant Bistro",
    description:
      "Restaurant website with menu, booking section, and responsive layout.",
    technologies: ["React", "CSS", "Context API"],
    demo: "https://bistro-wheat.vercel.app/",
    github: "https://github.com/KarenEhab53/restaurant-bistro",
  },
  {
    image: img1,
    title: "Appointment Application",
    description:
      "A complete appointment booking system with user/doctor dashboards and availability slots.",
    technologies: ["React", "Context API", "CSS"],
    demo: "https://appointmrnt-h28g.vercel.app/",
    github: "https://github.com/KarenEhab53/appointment-application",
  },
  {
    image: img5,
    title: "Swift Savers – Graduation Project",
    description:
      "Full medical system with appointments, profiles, and emergency features.",
    technologies: ["React", "Context API", "CSS"],
    github: "https://github.com/johnsame1/Graduation-Project",
  },
  {
    image: img2,
    title: "Users & Products Dashboard",
    description:
      "React app that displays users and products using Context API for state management.",
    technologies: ["React", "Context API", "CSS"],
    demo: "https://context-api-in-users-products.vercel.app/",
    github: "https://github.com/KarenEhab53/context-api-in-users-products",
  },
  {
    image: img3,
    title: "Travel Website",
    description:
      "Responsive landing page for booking travel packages using React and SASS.",
    technologies: ["React", "SASS"],
    github: "https://github.com/KarenEhab53/travel",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  const sliderRef = useRef(null);

  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="slider-wrapper">
        {/* Left button */}
        <button
          className="nav-btn left"
          onClick={() =>
            sliderRef.current.scrollBy({ left: -350, behavior: "smooth" })
          }
        >
          ‹
        </button>

        {/* Slider */}
        <motion.div
          ref={sliderRef}
          className="projects-slider"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          whileTap={{ cursor: "grabbing" }}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} />

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-list">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="links">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right button */}
        <button
          className="nav-btn right"
          onClick={() =>
            sliderRef.current.scrollBy({ left: 350, behavior: "smooth" })
          }
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Projects;

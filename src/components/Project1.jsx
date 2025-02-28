import { motion } from 'framer-motion';
import './Projects.css';
import project1Image from '../assets/magic-mouse.png';

function Project1() {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <img src={project1Image} alt="Apple Magic Mouse Battery checker" className="project-image" />
      <h3>Project 1: mouseCheck</h3>
      <p>A simple scritp to notifiy about low battery on apple's magic mouse.</p>
      <div className="tech-stack">
        <span>React</span>
        <span>Node.js</span>
        <span>CSS</span>
      </div>
      <a
        href="https://github.com/jluizpjr/mouseCheck"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View [Project Name]"
      >
        View Project
      </a>
    </motion.div>
  );
}

export default Project1;
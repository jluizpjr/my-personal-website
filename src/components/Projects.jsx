import { motion } from 'framer-motion';
import Project1 from './Project1';
import './Projects.css';

const projects = [
  { component: <Project1 key="1" />, id: 1 },
  { title: 'Project 2', description: 'Coming soon...', id: 2 },
  { title: 'Project 3', description: 'In progress...', id: 3 },
];

function Projects() {
  return (
    <motion.section
      className="projects"
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2>Projects</h2>
      <motion.div
        className="project-grid"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        viewport={{ once: true }}
      >
        {projects.map((project) =>
          project.component ? (
            project.component
          ) : (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          )
        )}
      </motion.div>
    </motion.section>
  );
}

export default Projects;
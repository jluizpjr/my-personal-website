import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} // Triggers when section is visible
      transition={{ duration: 0.6 }}
      viewport={{ once: true }} // Animates only once when scrolled into view
    >
      <h2>About Me</h2>
      <p>I’m a [profession] with experience in [skills]. I love [interest].</p>
    </motion.section>
  );
}

export default About;
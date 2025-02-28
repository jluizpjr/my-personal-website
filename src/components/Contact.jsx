import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Contact Me</h2>
      <p>Email: your.email@example.com</p>
      <p>Twitter: @yourhandle</p>
    </motion.section>
  );
}

export default Contact;
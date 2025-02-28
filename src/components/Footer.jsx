import { motion } from 'framer-motion';
import './Footer.css';

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <p>© 2025 [Your Name]. All rights reserved.</p>
    </motion.footer>
  );
}

export default Footer;
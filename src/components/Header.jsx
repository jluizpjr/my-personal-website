import { motion } from 'framer-motion';
import './Header.css';

function Header() {
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">Your Name</div>
      <nav>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.li variants={navVariants}><a href="#home">Home</a></motion.li>
          <motion.li variants={navVariants}><a href="#about">About</a></motion.li>
          <motion.li variants={navVariants}><a href="#projects">Projects</a></motion.li>
          <motion.li variants={navVariants}><a href="#contact">Contact</a></motion.li>
        </motion.ul>
      </nav>
    </motion.header>
  );
}

export default Header;
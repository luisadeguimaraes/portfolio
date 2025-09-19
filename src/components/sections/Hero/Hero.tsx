// NO import for 'next/image' is needed
import styles from './Hero.module.css';
import AboutMe from "./About/AboutMe"
import Contact from './Contact';

// import { FiDownload, FiMail, FiLinkedin } from 'react-icons/fi';

// NO import for Luisa.png from the public folder

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
     <AboutMe/>
     <Contact/>
      
    </section>
  );
};

export default Hero;
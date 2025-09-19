// NO import for 'next/image' is needed
import styles from './Hero.module.css';
import AboutMe from "./About/AboutMe"
import Contact from './Contact';
import Expertise from './Expertise/Expertise';

// import { FiDownload, FiMail, FiLinkedin } from 'react-icons/fi';

// NO import for Luisa.png from the public folder

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
     <AboutMe/>
     <Contact/>
      <Expertise/>
    </section>
  );
};

export default Hero;
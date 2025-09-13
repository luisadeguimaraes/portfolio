// NO import for 'next/image' is needed
import styles from './Hero.module.css';
import AboutMe from "./AboutMe"
import Expertise from './Expertise';

// import { FiDownload, FiMail, FiLinkedin } from 'react-icons/fi';

// NO import for Luisa.png from the public folder

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
     <AboutMe/>
    <Expertise/>
      
    </section>
  );
};

export default Hero;
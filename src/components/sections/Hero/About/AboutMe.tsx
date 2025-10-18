import styles from '../Hero.module.css';
import AboutMePD from "./AboutMePD"



const AboutMe = () => (

  <div className={styles.topContent}>


    <AboutMePD />


    <div className={styles.bio}>
     
        <strong className={styles.years}>+1 year</strong> of experience designing and developing digital products in a cross-functional team, partnering with founders and businesses to bring new ideas to life at a software company.
    
    </div>




  </div>


);

export default AboutMe;





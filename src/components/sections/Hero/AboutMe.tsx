import styles from './Hero.module.css';

const AboutMe = () => (
  <div className={styles.topContent}>
    {/* NEW: Wrapper for the image and its offset background */}
    <div className={styles.profileImageWrapper}>
      <img
        src="/Luisa.png"
        alt="Profile picture of Luisa de Guimarães"
        width="128"
        height="128"
        className={styles.profileImage}
      /> 
       <img
        src="/Luisa.png"
        alt="Profile picture of Luisa de Guimarães"
        width="128"
        height="128"
        className={styles.backgroundImage}
      />
      {/* The offset background element */}
      <div className={styles.offset}></div>
    </div>

    <div>
      <h1 className={styles.name}>Luisa de Guimarães</h1>
      <p className={styles.location}>Seattle, USA</p>
    </div>
    <p className={styles.bio}>
      +1 year o.. digital products in a cross-functional <strong>team</strong>, partnering with founders and businesses to bring new ideas to life at a <strong>software company</strong>.
    </p>
    <div className={styles.links}>
      <a href="mailto:luisadeguimaraes@gmail.com" className={styles.linkItem}>
        luisadeguimaraes@gmail.com
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
        LinkedIn
      </a>
      <a href="/luisa-guimaraes-resume.pdf" download className={styles.linkItem}>
        Download resume
      </a>
    </div>
  </div>
);

export default AboutMe;
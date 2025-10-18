import styles from "./Contact.module.css";

const Linkedin = () => {
  return (
    <div className={styles.contactItem}>
      <a className={styles.contactText} href="https://www.linkedin.com/in/luisa-lopes-88295335b" target="_blank" rel="noopener noreferrer">
        Linkedin
      </a>
    </div>
  );
};

export default Linkedin;
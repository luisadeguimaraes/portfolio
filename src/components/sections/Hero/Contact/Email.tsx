import styles from "./Contact.module.css"

const Email = () => {
    return (
        <div className={styles.contactItem}>
            <a href="mailto:contact.luisa@proton.me" className={styles.contactText}>contact.luisa@proton.me</a>
        </div>
    );
};

export default Email;
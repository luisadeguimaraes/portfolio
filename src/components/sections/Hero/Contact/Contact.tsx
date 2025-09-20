import styles from "./Contact.module.css"
import Email from "./Email";
import Linkedin from "./Linkedin";
import Resume from "./Resume";


const Contact = () => {
  	return (
    		<div className={styles.emailParent}>
      			<Email/>
				<Linkedin/>
      			<Resume/>
    		</div>);
};


export default Contact; 
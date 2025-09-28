import MacExample from "./MacExample/MacExample"
import styles from "./TaxExamples.module.css"


const TaxExamples = () => {
    return ( 
        <div className={styles.taxDiv}>
           <MacExample/>
            <div className={styles.pictureDiv}>

                <img className={styles.find} 
                alt="screenshot of desktop view" 
                src="/TaxExamples/find.png"
                />

                <img className={styles.browse} 
                alt="screenshot of desktop view" 
                src="/TaxExamples/browse.png"
                />
            </div>

        </div>
    )
}

export default TaxExamples
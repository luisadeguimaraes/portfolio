import MacExample from "./MacExample/MacExample"
import styles from "./TaxExamples.module.css"


const TaxExamples = () => {
    return ( 
        <div className={styles.taxDiv}>
           <MacExample/>
            <div className={styles.pictureDiv}>

                <img className={styles.taxPic} 
                alt="screenshot of desktop view" 
                src="/TaxExamples/TaxPic.png"
                />

            </div>

        </div>
    )
}

export default TaxExamples
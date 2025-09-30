
import styles from "./MacExample.module.css"

const MacExample = () => {
    return (
            <div className={styles.MacDiv}>
                <img className={styles.appleMacbookAir13Silver2} 
                alt="Laptop picture" 
                src="/AviationExamples/laptop.png"
                />
                <img className={styles.pilotTrackingTrainings1} 
                alt="screenshot of desktop view" 
                src="/AviationExamples/AviationMain.png"
                />
            </div>
    )
}


export default MacExample
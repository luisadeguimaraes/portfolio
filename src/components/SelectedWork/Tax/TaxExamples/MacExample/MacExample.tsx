
import styles from "./MacExample.module.css"


const MacExample = () => {
    return (
        <div className={styles.MacDiv}>
            <img className={styles.macBook}
                alt="Laptop picture"
                src="/AviationExamples/laptop.png"
            />

            <video
                className={styles.pilotTrackingTrainings1}
                src="/TaxExamples/waxVideo.mp4"
                controls
                loop
                muted
                playsInline
                autoPlay
            >
            </video>
        </div>
    )
}


export default MacExample
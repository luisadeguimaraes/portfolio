
import styles from "./MacExample.module.css"
import LeftExample from "./LeftExample"
import RightExample from "./RightExample"

const MacExample = () => {
    return (
        <div className={styles.MacDiv}>
            <LeftExample />
            <img className={styles.macBook}
                alt="Laptop picture"
                src="/AviationExamples/laptop.png"
            />
            

            <video
                className={styles.pilotTrackingTrainings1}
                src="/CampaignExamples/main.mp4"
                controls
                loop
                muted
                playsInline
                autoPlay

            >
            </video>
            <RightExample />
        </div>
    )
}


export default MacExample
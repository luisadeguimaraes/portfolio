import styles from "./Aviation.module.css"
import { asset } from "../../../hooks/pathing"

const AviationDisplay = () => {
    return (
        <div className={styles.displayHolder}>
            <div className={styles.cellPhonesDiv}>
                <img
                    src={asset('AviationExamples/halPhone.png')}
                    alt="Example Photo of Aviation App"
                    className={styles.halPhone}
                />
                <video
                    className={styles.aviationVideo} 
                    src={asset('AviationExamples/vid2.mp4')}
                    loop 
                    muted 
                    playsInline 
                    autoPlay
                    controls={false}
                ></video>
            </div>
        </div>
    )
}

export default AviationDisplay
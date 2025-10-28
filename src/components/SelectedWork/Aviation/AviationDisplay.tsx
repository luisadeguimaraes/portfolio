import styles from "./Aviation.module.css"


const AviationDisplay = () => {
    return (
        <div className={styles.displayHolder}>
            <div className={styles.cellPhonesDiv}>
                {/* might need another div to nest for the phones to space left  */}
                 <img
                    src="/AviationExamples/halPhone.png"
                    alt="Example Photo of Aviation App"
                    className={styles.halPhone}
                />
                     <video 
                    className={styles.aviationVideo} // Apply a CSS class for styling
                    src="/AviationExamples/halvideo.mp4"
                    controls // Allows users to play, pause, and adjust volume
                    loop // Optional: Makes the video restart when it finishes
                    muted // Optional: Good practice for autoplay, prevents user surprise
                    playsInline // Optional: Important for mobile compatibility (especially iOS)
                    autoPlay // Optional: Makes it start playing as soon as it loads
                ></video>
            </div>
        </div>
    )
}

export default AviationDisplay
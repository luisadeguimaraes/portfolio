import styles from "./Hero.module.css"

const AboutMePD = () => {
    return (
        <>
        <div className={styles.imageOuterWrapperDiv}>
            {/* Images div */}
            <div className={styles.profileImageWrapper}>
                <img
                    src="/Luisa.png"
                    alt="Profile picture of Luisa de Guimarães"
                    width="128"
                    height="128"
                    className={styles.profileImage}
                />
                <img
                    src="/Luisa.png"
                    alt="Profile picture of Luisa de Guimarães"
                    width="128"
                    height="128"
                    className={styles.backgroundImage}
                />
                </div>
            </div>
            {/* image outer wrapper end */}

            {/* Apply the bio style directly to the container div */}
            <div className={styles.bio}> 
                <p>
                    +1 year of experience designing and developing digital products in a cross-functional <strong>team</strong>, partnering with founders and businesses to bring new ideas to life at a <strong>software company</strong>.
                </p>
            </div>
        
        </>
    )
}

export default AboutMePD
import styles from "../Hero.module.css"

const AboutMePD = () => {
    return (
        <div className={styles.imageNameLocationDiv}>
        <div className={styles.imageOuterWrapperDiv}>
            {/* Images div */}
            <div className={styles.profileImageWrapper}>
                <img
                    src="/Luisa.png"
                    alt="Profile picture of Luisa de Guimarães"
                    
                    className={styles.profileImage}
                />
                <img
                    src="/Luisa.png"
                    alt="Profile picture of Luisa de Guimarães"
                  
                    className={styles.backgroundImage}
                />
                </div>
            </div>
            {/* image outer wrapper end */}

            {/* Apply the bio style directly to the container div */}
            <div className={styles.nameLocationDiv}> 
              <h3 className={styles.luisaDeGuimares }>Luisa Lopes</h3>
              <p className={styles.seattleWashington}>Seatte, Washington</p>
            </div>
        
        </div>
    )
}

export default AboutMePD
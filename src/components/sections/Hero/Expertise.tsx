import styles from "./Hero.module.css"
import pillsData from "./pillsData"

const Expertise = () => (
    <div className={styles.expertiseDiv}>
        <h2 className={styles.pillsTitle}>
          What I've designed (and can design for you)
        </h2>
        <div className={styles.pillsContainer}>
          {pillsData.map((pill) => (
            <div
              key={pill.text}
              className={`${styles.pill} ${styles[`pill${pill.color}`]}`}
            >
              {pill.text}
            </div>
          ))}
        </div>
      </div>
)

export default Expertise
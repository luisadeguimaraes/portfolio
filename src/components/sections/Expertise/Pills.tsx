import styles from "./Expertise.module.css";
import pillsData from "./pillsData";

const Pills = () => {
  return (
    <div className={styles.whatIDesign}>
      <div className={styles.frameParent}>
        {pillsData.slice(0, 4).map((pill, index) => (
          <div
            key={index}
            className={styles.pillWrapper}
            style={{
              backgroundColor: pill.color,
              transform: `rotate(${pill.rotateLeft ? '-2.5deg' : '2.5deg'})`,
            }}
          >
            <p className={styles.pillText} style={{ color: pill.textColor }}>
              {pill.text}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.frameParent}>
        {pillsData.slice(4, 8).map((pill, index) => (
          <div
            key={index + 4}
            className={styles.pillWrapper}
            style={{
              backgroundColor: pill.color,
              transform: `rotate(${pill.rotateLeft ? '-2.5deg' : '2.5deg'})`,
            }}
          >
            <p className={styles.pillText} style={{ color: pill.textColor }}>
              {pill.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pills;
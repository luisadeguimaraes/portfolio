

import styles from "./MeForReal.module.css"
import Title from "./Title"
import MeForRealDetail from "./MeForRealDetail/MeForRealDetail.tsx"



const MeForReal = () => {
    return (
        <section className={styles.frameParent}>
            <Title/>
            <MeForRealDetail/>
        </section>
    )
}

export default MeForReal
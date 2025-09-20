import Countries from "./Countries/Countries";
import styles from "./MeForRealDetail.module.css"
import ParagraphDetail from "./ParagraphDetail";


const MeForRealDetail = () => {
    return (
     
        <div className={styles.bornInRioParent}>
            <ParagraphDetail/>
            <Countries/>
        </div>
    )
}

export default MeForRealDetail;



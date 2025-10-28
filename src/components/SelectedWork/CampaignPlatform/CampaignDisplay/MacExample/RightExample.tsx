
import { asset } from "../../../../../hooks/pathing"
import styles from "./MacExample.module.css"


const RightExample = () => {
    return ( 
        
              <img className={styles.right} 
                alt="screenshot of desktop view" 
                src={asset("CampaignExamples/payDetails.png")}
                />
     
    )
}

export default RightExample


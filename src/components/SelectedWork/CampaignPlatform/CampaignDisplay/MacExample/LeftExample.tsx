import { asset } from "../../../../../hooks/pathing"
import styles from "./MacExample.module.css"



const LeftExample = () => {
    return ( 
          <img className={styles.left} 
                alt="Example of Designed Campaign Website" 
                src={asset("/CampaignExamples/leftPlex.png")}
                />
              
     
    )
}

export default LeftExample
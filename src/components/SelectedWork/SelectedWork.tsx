import styles from "./SelectedWork.module.css"
import TaxGuidanceExample from "./TaxGuidanceExample";
import AviationExamples from "./Aviation/AvaitionExample";
import CampaignPlatformExample from "./CampaignPlatform/CampaignPlatformExample"


const SelectedWork = () => {
  return (
    //sectiono div
    <div className={styles.sectionDiv}> 
        {/* div containing nested divs, one with "selected work" one with example headline */}
      <div>
        <div>
            <h3 className={styles.selectedWorkP}>Selected Work</h3>
        </div>
        <TaxGuidanceExample/>
        <AviationExamples/>
        <CampaignPlatformExample/>
      </div>
    </div>
  );
};

export default SelectedWork;
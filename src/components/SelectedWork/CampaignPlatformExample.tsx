// src/components/CampaignPlatformExample.tsx
import styles from "./SelectedWork.module.css";
import portfolioData from "../../SelectedWorkData";



const CampaignPlatformExample = () => {

    const campaignProject = portfolioData.find(project => project.id === 3);

    
      if (!campaignProject) {
        return <div>Project data not found.</div>;
    }

    return (
        <div 
             className={styles.projectItemContainer}>
            <div className={styles.headlineContainer}>
                <h2 className={styles.sampleWorkHeadline}>
                    {campaignProject.title}
                </h2>
            </div>
            {/* Map over the descriptions array to display the content */}
            <div style={{ backgroundColor: campaignProject.backgroundColor }} className={styles.descriptionContainer}>
                {campaignProject.descriptions.map((desc, index) => (
                    <div key={index} className={styles.descriptionSection}>
                        <h4 
                          style={{ color: campaignProject.secondaryColor }} 
                          className={styles.descriptionHeading}>
                            {desc.heading}
                        </h4>
                        <p 
                          className={styles.descriptionParagraph}
                          style={{ color: campaignProject.secondaryColor }}
                        >
                            {/* This is the new rendering logic for the paragraph */}
                            {desc.paragraph.map((part, partIndex) =>
                                part.bold ? (
                                    <strong key={partIndex}>{part.text}</strong>
                                ) : (
                                    <span key={partIndex}>{part.text}</span>
                                )
                            )}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CampaignPlatformExample;
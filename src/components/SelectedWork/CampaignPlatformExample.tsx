// src/components/TaxGuidanceExample.tsx
import styles from "./SelectedWork.module.css";
// Make sure to use the correct path and file name for your data
import portfolioData from "../../SelectedWorkData";


const CampaignPlatformExample = () => {
    // Find the specific data object for this project.
    const campaignProject = portfolioData.find(project => project.id === 3);

    // Add a check to ensure the data was found before trying to use it.
    if (!campaignProject) {
        return <div>Project data not found.</div>;
    }

    return (
        <div >
            <div className={styles.headlineContainer}>
                <h2 className={styles.sampleWorkHeadline}>
                    {campaignProject.title}
                </h2>
            </div>

            {/* Map over the images array to display the pictures
      <div className={styles.imageGallery}>
        {campaignProject.images.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={`${campaignProject.title} ${index}`} />
        ))}
      </div> */}

            {/* Map over the descriptions array to display the content */}
            <div style={{ backgroundColor: campaignProject.backgroundColor }}
                className={styles.descriptionContainer}>
                {campaignProject.descriptions.map((desc, index) => (
                    <div key={index} className={styles.descriptionSection}>
                        <h4 style={{ color: campaignProject.secondaryColor }}  className={styles.descriptionHeading}>{desc.heading}</h4>
                        <p style={{ color: campaignProject.secondaryColor }} className={styles.descriptionParagraph}>{desc.paragraph}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CampaignPlatformExample;
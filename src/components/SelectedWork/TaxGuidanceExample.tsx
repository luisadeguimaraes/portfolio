// src/components/TaxGuidanceExample.tsx
import styles from "./SelectedWork.module.css";
// Make sure to use the correct path and file name for your data
import portfolioData from "../../SelectedWorkData";


const TaxGuidanceExample = () => {
    // Find the specific data object for this project.
    const taxProject = portfolioData.find(project => project.id === 1);

    // Add a check to ensure the data was found before trying to use it.
    if (!taxProject) {
        return <div>Project data not found.</div>;
    }

    return (
        <div >
            <div className={styles.headlineContainer}>
                <h2 className={styles.sampleWorkHeadline}>
                    {taxProject.title}
                </h2>
            </div>

            {/* Map over the images array to display the pictures
      <div className={styles.imageGallery}>
        {taxProject.images.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={`${taxProject.title} ${index}`} />
        ))}
      </div> */}

            {/* Map over the descriptions array to display the content */}
            <div style={{ backgroundColor: taxProject.backgroundColor }}
                className={styles.descriptionContainer}>
                {taxProject.descriptions.map((desc, index) => (
                    <div key={index} className={styles.descriptionSection}>
                        <h4 style={{ color: taxProject.secondaryColor }}  className={styles.descriptionHeading}>{desc.heading}</h4>
                        <p className={styles.descriptionParagraph}>{desc.paragraph}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaxGuidanceExample;
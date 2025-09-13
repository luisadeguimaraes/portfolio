
// src/components/TaxGuidanceExample.tsx
import styles from "./SelectedWork.module.css";
// Make sure to use the correct path and file name for your data
import portfolioData from "../../SelectedWorkData";


const AviationExample = () => {
    // Find the specific data object for this project.
    const aviationProject = portfolioData.find(project => project.id === 2);

    // Add a check to ensure the data was found before trying to use it.
    if (!aviationProject) {
        return <div>Project data not found.</div>;
    }

    return (
        <div >
            <div className={styles.headlineContainer}>
                <h2 className={styles.sampleWorkHeadline}>
                    {aviationProject.title}
                </h2>
            </div>

            {/* Map over the images array to display the pictures
      <div className={styles.imageGallery}>
        {aviationProject.images.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={`${aviationProject.title} ${index}`} />
        ))}
      </div> */}

            {/* Map over the descriptions array to display the content */}
            <div style={{ backgroundColor: aviationProject.backgroundColor }}
                className={styles.descriptionContainer}>

                    
                {aviationProject.descriptions.map((desc, index) => (
                    <div key={index} className={styles.descriptionSection}>
                        <h4 style={{ color: aviationProject.secondaryColor }}  className={styles.descriptionHeading}>{desc.heading}</h4>
                        <p style={{ color: aviationProject.secondaryColor }} className={styles.descriptionParagraph}>{desc.paragraph}</p>
                    </div>
                ))}
             
            </div>
        </div>
    );
};

export default AviationExample;
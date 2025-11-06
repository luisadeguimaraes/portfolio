// src/components/TaxGuidanceExample.tsx
import styles from "../SelectedWork.module.css"
// Make sure to use the correct path and file name for your data
import portfolioData from "../../../SelectedWorkData"
import TaxExamples from "./TaxExamples/TaxExamples";


const TaxGuidanceExample = () => {
    // Find the specific data object for this project.
    const taxProject = portfolioData.find(project => project.id === 1);

    // Add a check to ensure the data was found before trying to use it.
    if (!taxProject) {
        return <div>Project data not found.</div>;
    }

    return (
        <div className={styles.projectItemContainer}>
            <div className={styles.headlineContainer}>
                <h3 className={styles.sampleWorkHeadline}>
                    {taxProject.title}
                </h3>
            </div>

            <TaxExamples/>

            <div style={{ backgroundColor: taxProject.backgroundColor }}
                className={styles.descriptionContainer}>
                {taxProject.descriptions.map((desc, index) => (
                    <div key={index} className={styles.descriptionSection}>
                        <h4 
                          style={{ color: taxProject.secondaryColor }} 
                          className={styles.descriptionHeading}>
                            {desc.heading}
                        </h4>
                        <p 
                          className={styles.descriptionParagraph}
                          style={{ color: taxProject.secondaryColor }}
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

export default TaxGuidanceExample;